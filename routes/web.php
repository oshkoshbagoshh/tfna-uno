<?php

//use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
//use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
//use App\Http\Controllers\ThreeFirstNamesController;
//use App\Http\Controllers\ContactController;


//  New Home Page
//Route::get('/', [ThreeFirstNamesController::class, 'index'])
//    ->name('home');


//    // Contact Form
//Route::post('/contact', [ContactController::class, 'store']);


// home page
Route::get('/', function () {''})


require __DIR__.'/auth.php';
