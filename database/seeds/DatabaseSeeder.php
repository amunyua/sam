<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $this->call(RolesSeeder::class);
//        $this->call(StoreSeeder::class);
//        $this->call(UserSeeder::class);
        $this->call(RouteSeeder::class);
        $this->call(BroadcastSeeder::class);
//        $this->call(MenuSeeder::class);
//        $this->call(ProductMenuCatSeeder::class);
//        $this->call(UOMSeeder::class);
    }
}
