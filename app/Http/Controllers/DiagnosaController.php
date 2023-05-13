<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\DaftarPertanyaan;

use Illuminate\Http\Request;

class DiagnosaController extends Controller
{
    public function index() {
        return Inertia::render('Diagnosa/Peringatan');
    }

    public function pertanyaan() {
        $data = [
            'pertanyaans' => DaftarPertanyaan::all()
        ];
        return Inertia::render('Diagnosa/DaftarPertanyaan', $data);
    }
}
