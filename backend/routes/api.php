<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\QuoteController;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Rutas para los servicios
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{service}', [ServiceController::class, 'show']);

// Ruta para las cotizaciones
Route::post('/quotes', [QuoteController::class, 'store']);

// Rutas Públicas de Autenticación
Route::post('/login', [AuthController::class, 'login']);

// Rutas Protegidas
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    // Rutas del CRUD para Servicios
    Route::post('/services', [ServiceController::class, 'store']);       // Crear
    Route::put('/services/{service}', [ServiceController::class, 'update']);    // Actualizar
    Route::delete('/services/{service}', [ServiceController::class, 'destroy']); // Borrar
});