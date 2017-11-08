<?php

use Illuminate\Database\Seeder;

class ProductMenuCatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('product_menu_categories')->delete();
        $cat = new \App\ProductMenuCategory();
        $cat->menu_cat_name = "Default Menu";
        $cat->created_by = 1;
        $cat->save();
    }
}
