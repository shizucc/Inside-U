<?php

namespace App\Http\Controllers;
use App\Models\CiriCiri;
use App\Models\DaftarPertanyaan;
use App\Models\UserKepribadian;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Models\Kepribadian;
use App\Models\User;

class PakarController extends Controller
{
    public function kepribadian(){
        $data = [
            'kepribadians' => Kepribadian::all()
        ];
        return Inertia::render('Pakar/ManajemenKepribadian', $data);
    }
    public function ciri_ciri(){
        $data = [
            'ciri_ciris' => CiriCiri::with('kepribadian')->get()
        ];
        return Inertia::render('Pakar/ManajemenCiriCiri', $data);
    }
    public function pertanyaan(){
        $data = [
            'pertanyaans'=> DaftarPertanyaan::with('ciri')->get()
        ];
        return Inertia::render('Pakar/ManajemenPertanyaan', $data);
    }

    public function histori(){
        $data = [
            'historis'=> User::with('kepribadians')->get()
        ];
        return Inertia::render('Pakar/HistoriDiagnosa', $data);
    }
}
