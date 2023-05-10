<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class DiagnosaController extends Controller
{
    public function index() {
        return Inertia::render('Diagnosa/Peringatan');
    }

    public function pertanyaan() {
        return Inertia::render('Diagnosa/Pertanyaan');
    }
}
