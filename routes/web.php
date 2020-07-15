<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::get('/synchronize', 'Auth\LoginController@synchronizeClient');
// Route::resource('samples', 'SampleController');

Route::fallback(function() {
    return view('default');
});