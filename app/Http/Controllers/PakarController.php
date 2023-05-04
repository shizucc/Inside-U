<?php

namespace App\Http\Controllers;
use App\Models\CiriCiri;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Models\Kepribadian;
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
            'ciri_ciris' => CiriCiri::all()
        ];
        return Inertia::render('Pakar/ManajemenCiriCiri', $data);
    }
}
