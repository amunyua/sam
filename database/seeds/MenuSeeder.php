<?php

use Illuminate\Database\Seeder;
use App\Models\Menu;
use App\Models\Route;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('menus')->delete();

        \Illuminate\Support\Facades\DB::table('menus')->delete();
//        #### Dashboard
        $dashboard_route = Route::where('route_name', 'Dashboard')->first();
        $dashboard = new Menu();
        $dashboard->fa_icon = 'fa-home';
        $dashboard->route_id = $dashboard_route->id;
        $dashboard->sequence = 1;
        $dashboard->save();
        $dashboard_id = $dashboard->id;

        $analytics_route = Route::where('route_name', 'Analytics Dashboard')->first();
        $analytics = new Menu();
        $analytics->route_id = $analytics_route->id;
        $analytics->parent_menu = $dashboard->id;
        $analytics->sequence = 1;
        $analytics->save();

//
//
//
        #### user management
        $user_mngt_route = Route::where('route_name', 'User Management')->first();
        $user_mngt = new Menu();
        $user_mngt->fa_icon = 'fa-group';
        $user_mngt->route_id = $user_mngt_route->id;
        $user_mngt->sequence = 8;
        $user_mngt->save();
        $user_mngt_id = $user_mngt->id;
//
//        $all_user_route = Route::where('route_name', 'All Users')->first();
//        $all_user = new Menu();
//        $all_user->route_id = $all_user_route->id;
//        $all_user->parent_menu = $user_mngt->id;
//        $all_user->sequence = 1;
//        $all_user->save();
//
        $role_route = Route::where('route_name', 'User Roles')->first();
        $role = new Menu();
        $role->route_id = $role_route->id;
        $role->parent_menu = $user_mngt->id;
        $role->sequence = 2;
        $role->save();
//
//        $audit_trail_route = Route::where('route_name', 'Audit Trail')->first();
//        $audit_trail = new Menu();
//        $audit_trail->route_id = $audit_trail_route->id;
//        $audit_trail->parent_menu = $user_mngt->id;
//        $audit_trail->sequence = 3;
//        $audit_trail->save();
//
        #### system
        $system_route = Route::where('route_name', 'System Settings')->first();
        $system = new Menu();
        $system->fa_icon = 'fa-cogs';
        $system->route_id = $system_route->id;
        $system->sequence = 9;
        $system->save();
        $system_id = $system->id;

        $routes_route = Route::where('route_name', 'System Routes')->first();
        $routes = new Menu();
        $routes->route_id = $routes_route->id;
        $routes->parent_menu = $system->id;
        $routes->sequence = 1;
        $routes->save();
//
//        $menu_route = Route::where('route_name', 'System Menu')->first();
//        $menu = new Menu();
//        $menu->route_id = $menu_route->id;
//        $menu->parent_menu = $system->id;
//        $menu->sequence = 2;
//        $menu->save();

        #### Store management
        $store_route = Route::where('route_name', 'Store Management')->first();
        $store = new Menu();
        $store->fa_icon = 'fa-home';
        $store->route_id = $store_route->id;
        $store->sequence = 2;
        $store->save();
        $store_id = $store->id;

        $str_r = Route::where('route_name', 'Stores')->first();
        $store_child = new Menu();
        $store_child->route_id = $str_r->id;
        $store_child->parent_menu = $store_id;
        $store_child->sequence = 1;
        $store_child->save();

    }
}