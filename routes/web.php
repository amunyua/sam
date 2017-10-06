<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//
//Auth::routes();
//
//Route::get('/home', 'HomeController@index');



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::resource('routes', 'RouteController');

Route::resource('menus', 'MenuController');

##### Roles
Route::resource('roles', 'RoleController');
Route::get('getRoutes/{id}',"RoleController@getRoutes");
//assigning permissions
Route::any('/give-permission/','RoleController@assignPermissions');


Route::resource('stores', 'StoreController');

Route::resource('users', 'UserController');