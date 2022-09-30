<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\MeetingController;
use App\Models\Exam;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::resource('articles', ArticleController::class)->except(['index', 'show']);
    Route::resource('books', BookController::class)->except('index');
    Route::resource('meetings', MeetingController::class)->except(['index', 'show']);
});


// public routing
Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/images_show', function () {
    return Inertia::render('Images');
});


Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{article}', [ArticleController::class, 'show'])->name('articles.show');
Route::get('/books', [BookController::class, 'index'])->name('books.index');
Route::get('/meetings', [MeetingController::class, 'index'])->name('meetings.index');
Route::get('/meetings/{meeting}', [MeetingController::class, 'show'])->name('meetings.show');

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::prefix('/quiz')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Quiz');
    });
    Route::get('/pre-exam', function () {
        return Inertia::render('QuizSamples/Exam', ['examType' => 'pre']);
        // return redirect()->back();
    });
    Route::get('/post-exam', function () {
        return Inertia::render('QuizSamples/Exam', ['examType' => 'post']);
        // return redirect()->back();
    });
    Route::post('/check-exam', [ExamController::class, 'checking']);
});

Route::get('/display-scores', function () {
    return Inertia::render('DisplayScores', [
        'scores' => Exam::orderByDesc('id')->get(),
    ]);
});

Route::get('/about-program', function () {
    return Inertia::render('AboutProgram');
});

Route::any('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::post('/login', [AuthController::class, 'authenticate']);
Route::get('/logout', [AuthController::class, 'logout']);
