<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DiagnosaController;
use App\Http\Controllers\Pakar\KepribadianController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Pakar\PakarController as PakarController;
use App\Http\Controllers\Pakar\CiriController as PakarCiriController;
use App\Http\Controllers\Pakar\KepribadianController as PakarKepribadianController;
use App\Http\Controllers\Pakar\PertanyaanController as PakarPertanyaanController;
use App\Http\Controllers\Pakar\HistoriController as PakarHistoriController;

Route::get('/', [DiagnosaController::class, 'index'])->name('home');

// Halaman Diagnosa
Route::get('/diagnosa', [DiagnosaController::class, 'notice'])->name('diagnosa.start');
Route::get('/diagnosa/pertanyaan', [DiagnosaController::class, 'pertanyaan'])->name('diagnosa.pertanyaan');
Route::post('/diagnosa/hasil', [DiagnosaController::class, 'perhitungan'])->name('diagnosa.perhitungan');
Route::get('/diagnosa/hasil-{user_id}-{diagnosa_id}', [DiagnosaController::class, 'hasil'])->name('diagnosa.hasil');

Route::middleware(['auth', 'verified'])->group(function () {
    // Admin
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
    Route::get('/manajemenpakar', function (){return Inertia::render('Admin/ManajemenPakar');})->name('admin.manajemenpakar');
    Route::get('/manajemenuser', function (){return Inertia::render('Admin/ManajemenUser');})->name('admin.manajemenuser');
    Route::get('/historidiagnosa', function (){return Inertia::render('Admin/HistoriDiagnosa');})->name('admin.historidiagnosa');
    //-- Form
    Route::get('/tambahuser', function (){return Inertia::render('Admin/TambahUser');})->name('admin.manajemenuser');
    // Pakar
    Route::get('/pakar', [PakarController::class, 'index'])->name('pakar.index');

    Route::resource('pakar/kepribadian', PakarKepribadianController::class)->names([
        'index' => 'pakar.kepribadian.index',
        'create' => 'pakar.kepribadian.create',
        'store' => 'pakar.kepribadian.store',
        'show' => 'pakar.kepribadian.show',
        'edit' => 'pakar.kepribadian.edit',
        'update' => 'pakar.kepribadian.update',
        'destroy' => 'pakar.kepribadian.destroy',
    ]);

    Route::resource('pakar/ciri', PakarCiriController::class)->names([
        'index' => 'pakar.ciri.index',
        'create' => 'pakar.ciri.create',
        'store' => 'pakar.ciri.store',
        'show' => 'pakar.ciri.show',
        'edit' => 'pakar.ciri.edit',
        'update' => 'pakar.ciri.update',
        'destroy' => 'pakar.ciri.destroy',
    ]);

    Route::resource('pakar/pertanyaan', PakarPertanyaanController::class)->names([
        'index' => 'pakar.pertanyaan.index',
        'create' => 'pakar.pertanyaan.create',
        'store' => 'pakar.pertanyaan.store',
        'show' => 'pakar.pertanyaan.show',
        'edit' => 'pakar.pertanyaan.edit',
        'update' => 'pakar.pertanyaan.update',
        'destroy' => 'pakar.pertanyaan.destroy',
    ]);
    

    Route::resource('/pakar/histori', PakarHistoriController::class)->only('index', 'show')->names([
        'index' => 'pakar.histori.index',
        'show' => 'pakar.histori.show',
    ]);
    Route::get('/pakar/manajemenkepribadian', function (){return Inertia::render('Pakar/ManajemenKepribadian');})->name('pakar.manajemenkepribadian');
    //Route::get('/pakar/manajemenciriciri', [PakarController::class,'ciri_ciri'])->name('pakar.manajemenciriciri');
    Route::get('/manajemenpertanyaan', function (){return Inertia::render('Pakar/ManajemenPertanyaan');})->name('pakar.manajemenpertanyaan');
    Route::get('/historidiagnosapkr', function (){return Inertia::render('Pakar/HistoriDiagnosa');})->name('pakar.historidiagnosa');
    //-- Form
    // Route::get('/tambahkepribadian', function (){return Inertia::render('Pakar/TambahKepribadian');})->name('pakar.manajemenkepribadian');
    // Route::get('/tambahciriciri', function(){return Inertia::render('Pakar/TambahCiriCiri');})->name('pakar.manajemenciriciri');
    // Route::get('/tambahpertanyaan', function(){return Inertia::render('Pakar/TambahPertanyaan');})->name('pakar.manajemenpertanyaan');
});



Route::get('/sidebar', function (){return Inertia::render('Admin/SidebarAdmin');});



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
