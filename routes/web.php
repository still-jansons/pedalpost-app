<?php
use App\Http\Controllers\AngularController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\CityController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\Auth\UserAuthController;
use App\Http\Controllers\CalendarController;
use App\Http\Controllers\OrderController;

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
Route::post('/create', [UserAuthController::class, 'createUser'])->name('auth.create');
Route::post('/check', [UserAuthController::class, 'authenticate'])->name('auth.check');
Route::get('/logout', [UserAuthController::class, 'logout']);


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
    Route::get('web/getClientsToken', [ClientController::class, 'getClientsToken']);
    Route::post('web/createClient', [ClientController::class, 'createClient']);
    Route::post('web/updateClientName', [ClientController::class, 'updateClientName']);
    Route::post('web/updateClientToken', [ClientController::class, 'updateClientToken']);
    Route::post('web/deleteClient', [ClientController::class, 'deleteClient']);
    
    Route::get('web/getOrdersByDate', [OrderController::class, 'getOrdersByDate']);

    Route::get('web/getDates', [CalendarController::class, 'getDates']);

    // Route::get('web/getAvailableDates', [OrderController::class, 'getAvailableDates']);
});

