<?php

use Illuminate\Database\Seeder;
use App\Models\Route;
use App\Models\Role;
//use Illuminate\Support\Facades\Route;

class RouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    const SystemAdmin = "SYS_ADMIN";
    public function run()
    {
        \Illuminate\Support\Facades\DB::table('routes')->delete();
       /* $collection = Route::getRoutes();
//        \App\Models\RoleRoute::delete();
//        \App\Route::truncate();

        foreach ($collection as $route) {
            $action = $route->getAction();

            if ($action['prefix'] != 'api') {

                if (!is_object($action['uses'])) {


                    \Illuminate\Support\Facades\DB::transaction(function() use($route, $action) {

                        $sys_route = SystemRoute::create(['url' => $route->uri, 'action' => $action['uses']]);

                        $role = Role::where('role_code', self::SystemAdmin)->first();

                        $sys_route->roles()->attach($role);

                    });

                }

            }
        }*/

        $admin = Role::where('role_code', 'SYS_ADMIN')->first();
        #### Dashboard
        $dashboard = new Route();
        $dashboard->route_name = 'Dashboard';
        $dashboard->icon = 'dashboard';
        $dashboard->sequence = 1;
        $dashboard->save();
        $dashboard_id = $dashboard->id;

        #### Dashboard child
        $analytics_dash = new Route();
        $analytics_dash->route_name = 'Analytics Dashboard';
        $analytics_dash->url = 'home';
        $analytics_dash->parent_route = $dashboard_id;
        $analytics_dash->save();
        $analytics_dash->roles()->attach($admin);

        ########### Communication management
        $communication = Route::create([
            'route_name' => "Communication",
            'url' => '#',
            'icon'=>'ring_volume',
            'sequence'=> 2
        ]);

        $comChild = Route::create([
            'route_name' => 'Comm Templates',
            'url'=> 'broadcasts',
            'parent_route' => $communication->id,
        ]);
        $comChild->roles()->attach($admin);
        $comChild = Route::create([
            'route_name' => 'All Sms',
            'url'=> 'sms',
            'parent_route' => $communication->id,
        ]);
        $comChild->roles()->attach($admin);

//        $redeem = Route::create([
//           'route_name'=> 'Redeem Order',
//           'url'=>'redeem',
//           'icon'=>'assignment_turned_in',
//            'sequence'=>3
//        ]);
//        $redeem->roles()->attach($admin);
        #### Store management
        $store_management = new Route();
        $store_management->route_name = 'Store Management';
        $store_management->icon = 'home';
        $store_management->sequence = 3;
        $store_management->save();
        $store_m_id = $store_management->id;

        $role = new Route();
        $role->route_name = 'Stores';
        $role->url = 'stores';
        $role->parent_route = $store_m_id;
        $role->save();
        $role->roles()->attach($admin);

        #### Product management
        $products = new Route();
        $products->route_name = 'Product Management';
        $products->icon = 'group_work';
        $products->sequence = 4;
        $products->save();
        $product_id = $products->id;
//
        #### user management children
        /*$product_category = new Route();
        $product_category->route_name = 'Product Categories';
        $product_category->url = 'productCategories';
        $product_category->parent_route = $product_id;
        $product_category->save();
        $product_category->roles()->attach($admin);*/

        //products
        $products = new Route();
        $products->route_name = 'All Products';
        $products->url = 'products';
        $products->parent_route = $product_id;
        $products->save();
        $products->roles()->attach($admin);

        $products = new Route();
        $products->route_name = 'UOMs';
        $products->url = 'uOMS';
        $products->parent_route = $product_id;
        $products->save();
        $products->roles()->attach($admin);

        ##################################### order management
        $order = Route::create([
            'route_name' => "Order Management",
            'url' => '#',
            'icon'=>'shopping_cart',
            'sequence'=> 4
        ]);

        $orderChild = Route::create([
            'route_name' => 'All Orders',
            'url'=> 'orders',
            'parent_route' => $order->id,

        ]);
        $orderChild->roles()->attach($admin);
        $orderChild = Route::create([
            'route_name' => 'All Payments',
            'url'=> 'payments',
            'parent_route' => $order->id,

        ]);
        $orderChild->roles()->attach($admin);
        $orderChild = Route::create([
            'route_name' => 'Redeem Order',
            'url'=> 'redeem-order',
            'parent_route' => $order->id,

        ]);
        $orderChild->roles()->attach($admin);

//        ########  Reports
//        $order = Route::create([
//            'route_name' => "Reports",
//            'url' => '#',
//            'icon'=>'shopping_cart',
//            'sequence'=> 4
//        ]);
        #### user management
        $user_mngt = new Route();
        $user_mngt->route_name = 'User Management';
        $user_mngt->icon = 'supervisor_account';
        $dashboard->sequence = 6;
        $user_mngt->save();
        $user_mngt_id = $user_mngt->id;
//
        #### user management children
        $all_user = new Route();
        $all_user->route_name = 'System Users';
        $all_user->url = 'users';
        $all_user->parent_route = $user_mngt_id;
        $all_user->save();
        $all_user->roles()->attach($admin);

        $roles = new Route();
        $roles->route_name = 'User Roles';
        $roles->url = 'roles';
        $roles->parent_route = $user_mngt_id;
        $roles->save();
        $roles->roles()->attach($admin);

/*//        #### system
        $system = new Route();
        $system->route_name = 'System Settings';
        $system->icon = 'settings';
        $system->sequence = 7;
        $system->save();
        $system_id = $system->id;

        #### system children
        $routes = new Route();
        $routes->route_name = 'System Routes';
        $routes->url = 'routes';
        $routes->parent_route = $system_id;
        $routes->save();
        $routes->roles()->attach($admin);*/

//        $role = new Route();
//        $role->route_name = 'Delete User';
//        $role->url = 'delete-user/{id}';
//        $role->parent_route = $user_mngt_id;
//        $role->save();
//        $role->roles()->attach($admin);
//
//        $role = new Route();
//        $role->route_name = 'Block User';
//        $role->url = 'all_users/block-user';
//        $role->parent_route = $user_mngt_id;
//        $role->save();
//        $role->roles()->attach($admin);
//
//        $role = new Route();
//        $role->route_name = 'Unblock User';
//        $role->url = 'all_users/unblock-user';
//        $role->parent_route = $user_mngt_id;
//        $role->save();
//        $role->roles()->attach($admin);
//
//
//        $audit_trail = new Route();
//        $audit_trail->route_name = 'Audit Trail';
//        $audit_trail->url = 'audit_trails';
//        $audit_trail->parent_route = $user_mngt_id;
//        $audit_trail->save();
//        $audit_trail->roles()->attach($admin);
//
//        $route = new Route();
//        $route->route_name = 'Load Routes Allocation';
//        $route->url = 'load-routes-allocation';
//        $route->parent_route = $system_id;
//        $route->save();
//        $route->roles()->attach($admin);
//
//        $route = new Route();
//        $route->route_name = 'is Route Allocated';
//        $route->url = 'check-allocated-route/{id}';
//        $route->parent_route = $system_id;
//        $route->save();
//        $route->roles()->attach($admin);
//
//        $route = new Route();
//        $route->route_name = 'Attach Route';
//        $route->url = 'attach-route';
//        $route->parent_route = $system_id;
//        $route->save();
//        $route->roles()->attach($admin);
//
//        $route = new Route();
//        $route->route_name = 'Detach Route';
//        $route->url = 'detach-route';
//        $route->parent_route = $system_id;
//        $route->save();
//        $route->roles()->attach($admin);

    }
}