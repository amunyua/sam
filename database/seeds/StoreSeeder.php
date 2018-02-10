<?php

use Illuminate\Database\Seeder;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Store::create([
            'store_name'=>"Java",
            'location'=>"Nairobi",
            'description'=>" Java offers roasted coffees teas burgers, fries and shakes, pancakes, waffles, omelettes, morning pastries, ice cream sundaes, banana splits, fruit salads, chips, burger buns, baguettes,cookies etc",
            'status'=>true,
            'image'=>""
        ]);
    }
}
