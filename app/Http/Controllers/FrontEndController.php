<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use App\Models\ProductMenu;
use App\Models\Store;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FrontEndController extends Controller
{
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
        $productMenus = DB::table('product_menus as pm')
            ->select([
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
                                                        <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
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
                                            echo '<article class="menu-item__variation js-fire-click-tracking-event" data-event="clicked_product" data-clicked_product_id="130501" data-clicked_product_name="Velvet Crumble" data-clicked_product_category_name="Donuts" data-clicked_product_category_id="14804" data-clicked_product_popular="no" data-item_url="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
                                                    <div class="menu-item__variation__title">'.$uom->uom_name.'</div>
    
                                                    <div class="menu-item__variation__price ">
                                                        '.$uom->price.' Ksh
                                                    </div>
    
                                                    <form method="get" action="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
                                                        <button class="btn add-to-cart " type="submit" data-item_url="/cart/add-product/vendor/k8jp/product/164410?productId=130501">
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
                    }
                }
            }
        }
    }
}
