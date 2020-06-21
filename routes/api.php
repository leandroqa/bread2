<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('produtos','ProductController@index')->name('products.index');
Route::get('produtos/{product}', 'ProductController@show')->name('products.show');
Route::post('produtos/gravar', 'ProductController@store')->name('products.store');
Route::put('produtos/{product}', 'ProductController@update')->name('products.update');
Route::delete('produtos/{product}', 'ProductController@delete')->name('products.delete');
Route::post('produtos/buscar','ProductController@search')->name('products.search');