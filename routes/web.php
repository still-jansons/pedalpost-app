<?php
use App\Http\Controllers\AngularController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\CityController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\Auth\UserAuthController;


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
Route::get('/', [UserAuthController::class, 'login']);
Route::get('/login', [UserAuthController::class, 'login'])->name('login')->middleware('checkAuth');
Route::group(['scheme' => 'https'], function () {
    // Route::get(...)->name(...);
    // Route::get('/', [UserAuthController::class, 'login'])->middleware('redirectIfAuthenticated');
    // Route::get('/login', [UserAuthController::class, 'login'])->middleware('redirectIfAuthenticated');
    // Route::get('/register', [UserAuthController::class, 'register'])->middleware('redirectIfAuth');
    Route::post('/create', [UserAuthController::class, 'createUser'])->name('auth.create');
    // Route::post('/check', [UserAuthController::class, 'loginUser'])->name('auth.check');
    Route::post('/check', [UserAuthController::class, 'authenticate'])->name('auth.check');
    Route::get('/logout', [UserAuthController::class, 'logout']);
});


Route::middleware(['auth'])->group(function () {
    Route::any('/{any}', [AngularController::class, 'index'])->where(
        ['any', '^(?!api).*$'],
        ['any', '^(?!web).*$']
    );
    Route::get('web/getLoggedUser', [UserAuthController::class, 'getLoggedUser']);

    Route::get('web/getCities', [CityController::class, 'getCities']);
    Route::post('web/updateOrCreateCity', [CityController::class, 'updateOrCreateCity']);
    Route::post('web/deleteCity', [CityController::class, 'deleteCity']);

    Route::get('web/getClients', [ClientController::class, 'getClients']);
    Route::post('web/createClient', [ClientController::class, 'createClient']);
    Route::post('web/updateClientName', [ClientController::class, 'updateClientName']);
    Route::post('web/updateClientToken', [ClientController::class, 'updateClientToken']);
    Route::get('web/getClientsToken', [ClientController::class, 'getClientsToken']);
});

