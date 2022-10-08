<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use Illuminate\Http\Request;
use App\Http\Controllers\ModulesController;
use App\Http\Controllers\FacebookController;
use App\Http\Controllers\MailGunController;


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

Route::resource('/', AccountController::class);



/*
 * Facebook Login Register
 */
Route::controller(FacebookController::class)->group(function(){
    Route::get('auth/facebook', 'redirectToFacebook')->name('auth.facebook');
    Route::get('auth/facebook/callback', 'handleFacebookCallback');
});




/*
 * log out on route
 * and
 * Redirect The user To home Page
 */
Route::get('/logout', function () {
    Auth::logout();
    return Redirect::to('/');
});



