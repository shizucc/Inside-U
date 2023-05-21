<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DiagnosaController;
use App\Http\Controllers\PakarController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [DiagnosaController::class, 'index'])->middleware(['auth', 'verified'])->name('home');

Route::get('/diagnosa', [DiagnosaController::class, 'notice'])->name('diagnosa.start');
Route::get('/diagnosa/pertanyaan', [DiagnosaController::class, 'pertanyaan'])->name('diagnosa.pertanyaan');

Route::get('/sidebar', function (){return Inertia::render('Admin/SidebarAdmin');});


Route::get('/pakar', [PakarController::class, 'index'])->name('pakar.index');

Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
Route::get('/manajemenpakar', function (){return Inertia::render('Admin/ManajemenPakar');})->name('admin.manajemenpakar');
Route::get('/manajemenuser', function (){return Inertia::render('Admin/ManajemenUser');})->name('admin.manajemenuser');
Route::get('/historidiagnosa', function (){return Inertia::render('Admin/HistoriDiagnosa');})->name('admin.historidiagnosa');

//pakar
Route::get('/manajemenkepribadian', function (){return Inertia::render('Pakar/ManajemenKepribadian');})->name('pakar.manajemenkepribadian');
Route::get('/manajemenciriciri', function (){return Inertia::render('Pakar/ManajemenCiriCiri');})->name('pakar.manajemenciriciri');
Route::get('/manajemenpertanyaan', function (){return Inertia::render('Pakar/ManajemenPertanyaan');})->name('pakar.manajemenpertanyaan');
Route::get('/historidiagnosapkr', function (){return Inertia::render('Pakar/HistoriDiagnosa');})->name('pakar.historidiagnosa');


//form
Route::get('/tambahuser', function (){return Inertia::render('Admin/TambahUser');})->name('admin.manajemenuser');
Route::get('/tambahkepribadian', function (){return Inertia::render('Pakar/TambahKepribadian');})->name('pakar.manajemenkepribadian');
Route::get('/tambahciriciri', function(){return Inertia::render('Pakar/TambahCiriCiri');})->name('pakar.manajemenciriciri');
Route::get('/tambahpertanyaan', function(){return Inertia::render('Pakar/TambahPertanyaan');})->name('pakar.manajemenpertanyaan');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
