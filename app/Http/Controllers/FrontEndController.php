<?php

namespace App\Http\Controllers;

use App\Jobs\SendSms;
use App\Models\Order;
use App\Models\OrderLine;
use App\Models\Payment;
use App\Models\ProductCategory;
use App\Models\ProductMenu;
use App\Models\Sms;
use App\Models\Store;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use infobip;
use JsonMapper;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class FrontEndController extends Controller
{
    public static $cart = [];
    public function index(){
        return view('home.index',[
            'stores'=>Store::all()
        ]);
    }
    public function loopCategories($parent,$parentCats){
        $parent_cat = $parent->parent_category;
        if(!is_null($parent_cat)){
            $p = ProductCategory::find($parent_cat);
//            echo $p->category_name;
            $parentCats[] = $p->category_name;
            $this->loopCategories($p,$parentCats);
        }
        return $parentCats;
    }
    public function partner($id){
        session_start();
        $_SESSION['cart'] = [];
        $productMenus = DB::table('product_menus as pm')
            ->select([
                'pm.id',
                'pm.product_id',
                'pm.uom',
                'pm.description',
                'pm.price',
                'pm.store_id',
                'p.name as product_name',
                'p.product_category',
                'pc.parent_category',
                'pc.category_name',
                'u.name as uom_name'
            ])
            ->leftJoin('products as p','p.id','=','pm.product_id')
            ->leftJoin('product_categories as pc','p.product_category','=','pc.id')
            ->leftJoin('uoms as u','u.id','=','pm.uom')
            ->where('pm.store_id',$id)
            ->where('pm.status',true)
            ->where('pm.deleted_at',null)
            ->get();
//        print_r($productMenus);die;

        $products = [];
        //where parents is equal to null
        $nullParents = $productMenus->where('parent_category',null);
        if(count($nullParents)){
            foreach ($nullParents as $nullParent){
                $array = $productMenus->where('product_category',$nullParent->product_category);
                $products[$nullParent->category_name] = $array;

            }
        }

        //where parents are not equal to null
        $notNull = $productMenus->where('parent_category','<>',null);
        $distinctParentCategories = $notNull->unique('parent_category')->pluck('parent_category');
        if(count($distinctParentCategories)){
            $p =[];
            foreach ($distinctParentCategories as $parentCategory){
                $category = ProductCategory::find($parentCategory);
//                echo $category;
                $inParentCat = $notNull->where('parent_category',$parentCategory);
                if(count($inParentCat)){
                    $distinctCaregoryInThis = $inParentCat->groupBy('category_name');
                    $products[$category->category_name] = ['parent'=>$distinctCaregoryInThis];
                }

            }
        }
//        print_r($products);die;
        return view("shop.index",[
            'partner'=>Store::find($id),
            'products'=>$products
        ]);
    }

    public function displayMenus($products){
       $this->sort($products);
    }
    public function sort($products){
        if(count($products)){
            foreach ($products as $key1 => $product){
                if(!array_key_exists('parent',$product)){
                    echo  ' <div class="categories__title"> '. $key1.'</div>';
                    echo  '
                             <ul class="categories__list ">
                            <li class="categories__list__item">
                                <a href="#'.snake_case($key1).'">
                                    '. $key1.'
                                </a>
                            </li>
                        </ul>';
                }else{
                    echo  ' <div class="categories__title"> '. $key1.'</div>';
                    echo ' <ul class="categories__list ">';
                    foreach ($product["parent"] as $key2 => $a){
                        echo  '
                            
                            <li class="categories__list__item">
                                <a href="#'.snake_case($key2).'">
                                    '. $key2.'
                                </a>
                            </li>
                        ';
                    }
                    echo '</ul>';
                }
            }
        }
    }

    public function loadMenuProducts($products){
        if(count($products)){
            foreach ($products as $key1 => $product){
                if(!array_key_exists('parent',$product)){
//
                    echo '<section class="menu">
                            <div class="menu__header">
                                <h3 class="menu__title">'.$key1.'</h3>
                            </div>
    
                            <article class="menu__category">
                                <div class="menu__category__header">
                                    <div id="'.snake_case($key1).'" class="menu__category__title">
                                        '.$key1.'
                                    </div>
                                </div>';
                    if(count($product)){
                        $distinctProducts = $product->unique('product_id')->pluck('product_id');
                        if(count($distinctProducts)> 1){
                            foreach ($distinctProducts as $prod){
                                echo '<article class="menu-item has-variations  ">
                                    <div class="menu-item__content-wrapper">
                                        <div class="menu-item__content-container">
                                            <div class="menu-item__content ">
    
                                                <div class="menu-item__title" title="Velvet Crumble">';
                                echo $product->where('product_id',$prod)->first()->product_name;
                                echo   '</div>
    
    
                                                
                                            </div>
                                            <div class="menu-item__dish-characteristic-container">
                                            <p class="menu-item__description">Salty, sweet donut bun</p>
                                            </div>
                                        </div>
    
    
                                        <div class="menu-item__variations-container  ">
                                            <ul class="menu-item__variations">';
                                                    $uoms = $product->where('product_id',$prod);
                                                    if(count($uoms)){
                                                        foreach ($uoms as $uom){
                                                            echo '<article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130501" data-clicked_product_name="Velvet Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
                                                    <div class="menu-item__variation__title">'.$uom->uom_name.'</div>
    
                                                    <div class="menu-item__variation__price ">
                                                        '.$uom->price.' Ksh
                                                    </div>
    
                                                    <form method="get" action="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
                                                        <button class="btn add-to-cart add-to-cart-a " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
                                                            <i class="icon icon-add icon-add-to-cart"></i>
                                                            <i class="icon icon-added icon-added-to-cart"></i>
                                                        </button>
                                                    </form>
                                                </article>';
                                                        }
                                                    }
                                            echo '</ul>
                                        </div>
                                    </div>
                                </article>';
                            }
                        }

                    }

                            echo
                            '</article>
                        </section>';


                }else{
                    echo '<section class="menu">
                            <div class="menu__header">
                                <h3 class="menu__title">'.$key1.'</h3>
                            </div>';

                    foreach ($product["parent"] as $key2 => $product2){
                        if(count($product2)){

                           echo '<article class="menu__category">
                                <div class="menu__category__header">
                                    <div id="'.snake_case($key2).'" class="menu__category__title">
                                        '.$key2.'
                                    </div>
                                </div>';
                            $distinctProducts = $product2->unique('product_id')->pluck('product_id');
                            if(count($distinctProducts)> 0){
                                foreach ($distinctProducts as $prod){
                                    echo '<article class="menu-item has-variations  ">
                                    <div class="menu-item__content-wrapper">
                                        <div class="menu-item__content-container">
                                            <div class="menu-item__content ">
    
                                                <div class="menu-item__title" title="Velvet Crumble">';
                                    echo $product2->where('product_id',$prod)->first()->product_name;
                                    echo   '</div>
    
    
                                                
                                            </div>
                                            <div class="menu-item__dish-characteristic-container">
                                            <p class="menu-item__description">'.$product2->where('product_id',$prod)->first()->description.'</p>
                                            </div>
                                        </div>
    
    
                                        <div class="menu-item__variations-container  ">
                                            <ul class="menu-item__variations">';
                                    $uoms = $product2->where('product_id',$prod);
                                    if(count($uoms)){
                                        foreach ($uoms as $uom){
                                            echo '<article class="menu-item__variation" >
                                                    <div class="menu-item__variation__title">'.$uom->uom_name.'</div>
    
                                                    <div class="menu-item__variation__price ">
                                                        '.$uom->price.' Ksh
                                                    </div>
    
                                                        <button class="btn add-to-cart add-to-cart-a " menuid ="'.$uom->id.'" >
                                                            <i class="icon fa  fa-plus-circle " style="margin-top: 13px;font-size: 15px;"></i>
                                                        </button>
                                                </article>';
                                        }
                                    }
                                    echo '</ul>
                                        </div>
                                    </div>
                                </article>';
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    public function getMenuProduct($id){
        $menuItem = ProductMenu::query()
            ->select(["product_menus.*",'products.name','u.name as uom_name'])
        ->leftJoin('products','products.id','=','product_menus.product_id')
            ->leftJoin('uoms as u','u.id','=','product_menus.uom')
            ->where('product_menus.id',$id)
            ->first();

        return response()->json($menuItem);
    }

    public function mobileVerification(){
        session_start();

//        print_r( $_SESSION['cart']);die;
        return view('shop.mobile');
    }

    public function checkout(Request $request){
        session_start();
//        $s
        if($request->has("partnerId")){
            $_SESSION['cart'] = [
                'partnerId'=>$request->partnerId,
                'items'=>$request->cart,
            ];
        }else{
            $cart = $_SESSION['cart'];
            $customerDetails = $cart["customerDetails"];
            $partnerId = $cart["partnerId"];
            $_SESSION['cart'] = [
                'partnerId'=>$partnerId,
                'items'=>$request->cart,
                'customerDetails'=>$customerDetails
            ];
        }
//        print_r( $_SESSION['cart']);die;

        return response()->json($_SESSION['cart']);

    }

    public function customerDetails(Request $request){
        session_start();
        $cart =  $_SESSION['cart'];
        $customerDetails = [
            "sender_name"=>$request->sender_name,
            'sender_number'=>$request->sender_mobile_number,
            'sender_email'=>$request->sender_email,
            "receiver_name"=>$request->receiver_name,
            "receiver_email"=>$request->receiver_email,
            "receiver_number"=>$request->receiver_mobile_number
        ];
        $cart['customerDetails'] = $customerDetails;
        $_SESSION['cart'] = $cart;
        return redirect('review');
    }

    public function reviewCart(){
        session_start();
        $cart =  $_SESSION['cart'];
//        print_r($cart);die;
        return view('shop.review-order',[
            'partner'=>Store::find($cart["partnerId"])
        ]);
    }

    function getCart(){
        session_start();
        $cart =  $_SESSION['cart'];
        if(!is_null($cart)){
            $cart = $cart["items"];
        }else{
            $cart= [];
        }

        return response()->json($cart);

    }

    public function placeOrder(){
        session_start();
        $cart =  $_SESSION['cart'];
//        print_r($cart);die();
        return view('shop.place-order',[
            'customerDetails'=>$cart["customerDetails"],
            'items'=>$cart["items"],
            'partner'=>Store::find($cart["partnerId"])
        ]);
    }

    private $_total =0;
    private $_order_id = null;
    public function saveOrderAndProceedToPayment(Request $request){
        session_start();
        $cart =  $_SESSION['cart'];
        $customer = $cart['customerDetails'];
        $items = new Collection($cart["items"]);
        $fields =[];
        //here get details from the cart details
        try{
//            $total = 0;
            DB::transaction(function () use($customer,$items,$cart,$request){

                foreach ($items as $item){
                    $this->_total = $this->_total + ($item["quantity"] * $item["price"]);
                }
               $order = Order::create([
                   'sender_name'=> $customer["sender_name"],
                   'sender_email'=> $customer["sender_email"],
                   'sender_number'=> $customer["sender_number"],
                   'receiver_name'=> $customer["receiver_name"],
                   'receiver_phone' => $customer["receiver_number"],
                   'receiver_email'=> (isset($customer["receiver_email"]))? $customer["receiver_email"] : '',
                   'store_id' => $cart["partnerId"],
                   'total'=>$this->_total,
                   'amount_paid'=>0,
                   'ip'=> $request->ip()
               ]);
                $this->_order_id = $order->id;
                foreach ($items as $item){
//                    echo $order->id;die();
                    $orderLines = OrderLine::create([
                        'order_id'=>$order->id,
                        'product_id'=>$item["prodId"],
                        'store_id'=> $cart["partnerId"],
                        'price'=>$item["price"],
                        'uom'=>$item["uom"],
                        'product_name'=>$item["prodName"],
                        'quantity'=> $item["quantity"]
                    ]);
                }

//                return $fields;
            });
            $fields=[
                "live"=> "0",
                "oid"=> $this->_order_id,
                "inv"=> $this->_order_id,
                "ttl"=> $this->_total,
                "tel"=> $customer["sender_number"],
                "eml"=> $customer["sender_email"],
                "vid"=> "demo",
                "curr"=> "KES",
                "p1"=> $this->_order_id,
                "p2"=> $this->_total,
                "p3"=> $cart["partnerId"],
                "p4"=> "900",
                "cbk"=> url('iPayCbk'),
                "cst"=> "1",
                "crl"=> "0"
            ];
            $datastring =  $fields['live'].$fields['oid'].$fields['inv'].$fields['ttl'].$fields['tel'].$fields['eml'].$fields['vid'].$fields['curr'].$fields['p1'].$fields['p2'].$fields['p3'].$fields['p4'].$fields['cbk'].$fields['cst'].$fields['crl'];
            $hashkey ="demo";
            $generated_hash = hash_hmac('sha1',$datastring , $hashkey);
            $fields["hsh"] = $generated_hash;

            $status = true;
            $message = "success";
        }catch (QueryException $ex){
            $status = false;
            $message = $ex->errorInfo[2];
        }


        return response()->json(['status' => $status, 'data'=>$fields,$message]);
    }


    public static $success = "aei7p7yrx4ae34";
    public function ipayCallback(Request $request){
        $status = false;
        switch ($request->status){
            case self::$success:
                if(Payment::where('txn_code',$request->txncd)->first() == null) {
                    try{
                        DB::transaction(function()use($request){
                            $payment = Payment::create([
                                'order_id' => $request->id,
                                'txn_code' => $request->txncd,
                                'ipay_status' => $request->status,
                                'status_meaning' => "Success",
                                'invoice_number' => $request->id,
                                'registered_name' => $request->msisdn_id,
                                'registered_number' => $request->msisdn_idnum,
                                'store_id' => $request->p3,
                                'channel' => $request->channel,
                                'amount_to_be_paid' => $request->p2,
                                'total_paid' => $request->mc,
                                'short' => 0,
                                'excess' => 0,
                                'complete' => true
                            ]);

                            $order = Order::find($request->id);
                            $order->amount_paid = $request->mc;
                            $order->payment_method = $request->channel;
                            $order->refCode = $request->txncd;
                            $order->paid = true;
                            $order->valid = true;
                            $order->save();
                            $message = "Dear ".$order->receiver_name.' '.$order->sender_name.' has sent you a voucher';
                            $sms = new Sms();
                            $sms->message = $message;
                            $sms->recipient = $order->receiver_phone;
                            $sms->sender = $order->sender_number;
                            $sms->store_id = $order->store_id;
                            $sms->save();
                            SendSms::dispatch($message,$order->receiver_phone,$sms->id);
                        });
                        $status = true;
                    }catch (QueryException $e){
                        throw $e;
                    }
                }

                break;
        }

//        if($status){
            return redirect('complete/'.$request->id);
//        }
    }

    public function complete($id){
        session_start();
        $cart = (isset($_SESSION['cart']))? $_SESSION["cart"]:[];
        return view('shop.complete',[
            'cart'=>$cart
        ]);
    }

    public function infoBipReturnData($id,Request $responseBody){
        $sms = Sms::find($id);
        if(!is_null($sms)){
            Log::info("not null response");
        }
        /*$mapper = new JsonMapper();

        $responseObject = $mapper->map(json_decode($responseBody), new infobip\api\model\sms\mt\reports\SMSReportResponse());

        for ($i = 0; $i < count($responseObject->getResults()); ++$i) {
            $result = $responseObject->getResults()[$i];
            Log::info( "Message ID: " . $result->getMessageId() . "\n");
//            echo "Sent at: " . $result->getSentAt()->format('y-M-d H:m:s T') . "\n";
//            echo "Receiver: " . $result->getTo() . "\n";
            echo "Status: " . $result->getStatus()->getName() . "\n";
            echo "Price: " . $result->getPrice()->getPricePerMessage() . " " . $result->getPrice()->getCurrency() . "\n\n";
        }*/
    }
}
