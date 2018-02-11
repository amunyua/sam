<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;

class FrontEndController extends Controller
{
    public function index(){

        return view('home.index',[
            'stores'=>Store::all()
        ]);
    }

    public function partner($id){

        return view("shop.index",[
            'partner'=>Store::find($id),
        ]);
    }
}
