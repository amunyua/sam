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

//Route::get('/', function () {
//    return view('welcome');
//});

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
Route::resource('productCategories', 'ProductCategoryController');
Route::resource('products', 'ProductController');
Route::get('/getProductCats','ProductController@getProductCats');
Route::get('/getProducts','ProductController@getProducts');
Route::get('/getPMenus','ProductController@getProductMenus');
Route::any('download', 'StoreController@fileDownload');

Route::resource('productMenus', 'ProductMenuController');
Route::get('getPm/{id}','ProductMenuController@show');



Route::resource('uOMS', 'UOMController');


#######################################################################################
//front end routes

Route::get('index',"FrontEndController@index");
Route::get('/',"FrontEndController@index");
Route::get('partner/{id}',"FrontEndController@partner");
Route::get('prodMenu/{id}',"FrontEndController@getMenuProduct");
Route::get('mobile',"FrontEndController@mobileVerification");
Route::post('checkout',"FrontEndController@checkout");
Route::post('customer-details',"FrontEndController@customerDetails");
Route::get('review',"FrontEndController@reviewCart");
Route::get('getCart',"FrontEndController@getCart");
Route::get('place-order',"FrontEndController@placeOrder");