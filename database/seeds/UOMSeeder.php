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
        \Illuminate\Support\Facades\DB::table('uoms')->delete();
        $uom = new \App\Uom();
        $uom->name = "Glass";
        $uom->save();
    }
}
