<?php

use Illuminate\Database\Seeder;
//use App\Masterfile;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

//        $admin_mf = Masterfile::where('surname', 'Admin')->first();
        $sys_admin = \App\Models\Role::where('role_code', 'SYS_ADMIN')->first();

        $admin = new \App\User();
        $admin->name = 'Admin Admin';
        $admin->email = 'admin@admin.com';
        $admin->password = bcrypt(123456);
//        $admin->created_by = 0;
        $admin->password_updated = true;
        $admin->save();
        $admin->roles()->attach($sys_admin);
    }
}
