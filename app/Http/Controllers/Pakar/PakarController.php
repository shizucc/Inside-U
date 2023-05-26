<?php

namespace App\Http\Controllers\Pakar;
use App\Http\Controllers\Controller;
use App\Models\CiriCiri;
use App\Models\DaftarPertanyaan;
use App\Models\UserKepribadian;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Models\Kepribadian;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class PakarController extends Controller
{
    public function authPakar(){
        $role = User::find(Auth::id())->role;

        if ($role == "user") {
            return redirect()->route("home");
        } elseif ($role == "admin") {
            return redirect()->route("admin.index");
        }
    }
    public function index(){
        // Redirect apabila role user tidak sesuai
        $this->authPakar();
        $pertanyaans = DaftarPertanyaan::with('ciri')->get();
        $data = [
            'columns' => [
                'pertanyaans' => $pertanyaans->map(function($pertanyaan){
                    return $pertanyaan->pertanyaan;
                })->toArray(),
                'ciri_ciris' => $pertanyaans->map(function($pertanyaan){
                    return $pertanyaan->ciri->ciri;
                }),
                'kepribadians' => $pertanyaans->map(function($pertanyaan){
                    $kepribadian = Kepribadian::where('id', $pertanyaan->ciri->kepribadian_id)->value('jenis_kepribadian');
                    return $kepribadian;
                })
            ]
            ];
        return Inertia::render('Pakar/Index3',$data);
    }
    public function kepribadian(){
        // Redirect apabila role user tidak sesuai
        $this->authPakar();

        $data = [
            'kepribadians' => Kepribadian::all()
        ];
        return Inertia::render('Pakar/ManajemenKepribadian', $data);
    }
    public function ciri_ciri(){
        // Redirect apabila role user tidak sesuai
        $this->authPakar();

        $data = [
            'ciri_ciris' => CiriCiri::with('kepribadian')->get()
        ];
        return Inertia::render('Pakar/ManajemenCiriCiri', $data);
    }
    public function pertanyaan(){
        // Redirect apabila role user tidak sesuai
        $this->authPakar();

        $data = [
            'pertanyaans'=> DaftarPertanyaan::with('ciri')->get()
        ];
        return Inertia::render('Pakar/ManajemenPertanyaan', $data);
    }

    public function histori(){
        // Redirect apabila role user tidak sesuai
        $this->authPakar();

        $data = [
            'historis'=> User::with('kepribadians')->orderBy('id', 'asc')->get()
        ];
        return Inertia::render('Pakar/HistoriDiagnosa', $data);
    }
}
