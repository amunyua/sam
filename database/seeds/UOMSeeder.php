<?php

use Illuminate\Database\Seeder;

class UOMSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        \Illuminate\Support\Facades\DB::table('uoms')->delete();
        $uom = new \App\Uom();
        $uom->name = "250ml";
        $uom->created_by = \App\Models\User::all()->first()->id;
        $uom->store_id = \App\Models\Store::first()->id;
        $uom->save();
    }
}
