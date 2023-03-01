<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Artisan;

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
// Cache Clear
Route::get("/cc", function () {
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('config:cache');
    return "Cache Cleared";
});

Route::post("login", [AuthController::class,'login']);
Route::post("register", [AuthController::class,'register']);

// All Secure URL's
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get("dashboard", [AuthController::class,'dashboard']);
});
