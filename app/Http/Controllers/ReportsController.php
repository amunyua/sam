<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderLine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ReportsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function redeemOrder(){

        return view('reports.redeem');
    }

    public function searchOrder(Request $request){
        $order = Order::find($request->code);
        $status = false;
        $message = "Order details not found";
        $orderLines = [];
        if($order != null){
            $orderLines = OrderLine::where('order_id',$order->id)->get();
            $status = true;
            $message = "Order details";
        }
        return response()->json([
            'order'=> $order,
            'orderLines'=> $orderLines,
            'status'=> $status,
            'message'=> $message
        ]);
    }

    public function RedeemOderDetails(Request $request){
        $order = Order::find($request->order_id);
        $order->valid = false;
        $order->collected = true;
        Session::flash('success',"Order has been redeemed");

        $order->save();
        return redirect('redeem-order');
    }
}
