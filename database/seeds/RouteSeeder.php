<?php

use Illuminate\Database\Seeder;
use App\Models\Route;
use App\Models\Role;

class RouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('routes')->delete();

        $admin = Role::where('role_code', 'SYS_ADMIN')->first();
        #### Dashboard
        $dashboard = new Route();
        $dashboard->route_name = 'Dashboard';
        $dashboard->save();
        $dashboard_id = $dashboard->id;

//        $home = new Route();
//        $home->route_name = 'Home';
//        $home->url = 'home';
//        $home->parent_route = $dashboard_id;
//        $home->save();
//        $home->roles()->attach($admin);


        #### Dashboard child
        $analytics_dash = new Route();
        $analytics_dash->route_name = 'Analytics Dashboard';
        $analytics_dash->url = 'home';
        $analytics_dash->parent_route = $dashboard_id;
        $analytics_dash->save();
        $analytics_dash->roles()->attach($admin);


//        #### system
        $system = new Route();
        $system->route_name = 'System Settings';
        $system->save();
        $system_id = $system->id;

        #### system children
        $routes = new Route();
        $routes->route_name = 'System Routes';
        $routes->url = 'routes';
        $routes->parent_route = $system_id;
        $routes->save();
        $routes->roles()->attach($admin);
//
//        $routes = new Route();
//        $routes->route_name = 'Load System Routes';
//        $routes->url = 'load-routes';
//        $routes->parent_route = $system_id;
//        $routes->save();
//        $routes->roles()->attach($admin);
//
//        $menu = new Route();
//        $menu->route_name = 'System Menu';
//        $menu->url = 'menu';
//        $menu->parent_route = $system_id;
//        $menu->save();
//        $menu->roles()->attach($admin);
//
//        $system_config = new Route();
//        $system_config->route_name = 'System Configuration';
//        $system_config->url = 'sys-config';
//        $system_config->parent_route = $system_id;
//        $system_config->save();
//        $system_config->roles()->attach($admin);
//
//        $system_config = new Route();
//        $system_config->route_name = 'System Settings';
//        $system_config->url = 'load-config';
//        $system_config->parent_route = $system_id;
//        $system_config->save();
//        $system_config->roles()->attach($admin);
//
//        $system_config = new Route();
//        $system_config->route_name = 'Get Route Data';
//        $system_config->url = 'get-route/{route_id}';
//        $system_config->parent_route = $system_id;
//        $system_config->save();
//        $system_config->roles()->attach($admin);
//
//        $system_config = new Route();
//        $system_config->route_name = 'Update Route';
//        $system_config->url = 'edit-route';
//        $system_config->parent_route = $system_id;
//        $system_config->save();
//        $system_config->roles()->attach($admin);
//
        #### user management
        $user_mngt = new Route();
        $user_mngt->route_name = 'User Management';
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

        #### Store management
        $store_management = new Route();
        $store_management->route_name = 'Store Management';
        $store_management->save();
        $store_m_id = $store_management->id;

        $role = new Route();
        $role->route_name = 'Stores';
        $role->url = 'stores';
        $role->parent_route = $store_m_id;
        $role->save();
        $role->roles()->attach($admin);

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