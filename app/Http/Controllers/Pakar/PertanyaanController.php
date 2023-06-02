<?php

namespace App\Http\Controllers\Pakar;

use App\Http\Controllers\Controller;
use App\Models\CiriCiri;
use App\Models\DaftarPertanyaan;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class PertanyaanController extends Controller
{
    public function authPakar(){
        $role = User::find(Auth::id())->role;

        if ($role == "user") {
            return redirect()->route("home");
        } elseif ($role == "admin") {
            return redirect()->route("admin.index");
        }
    }
    public function index()
    {
        $this->authPakar();

        $data = [
            'pertanyaans'=> DaftarPertanyaan::with('ciri')->orderBy('id')->get()
        ];
        return Inertia::render('Pakar/ManajemenPertanyaan', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authPakar();
        $data = [
            'ciri_ciris' => CiriCiri::all()
        ];
        return Inertia::render('Pakar/TambahPertanyaan', $data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authPakar();
        $pertanyaan = new DaftarPertanyaan;
        $pertanyaan->pertanyaan =  $request->pertanyaan;
        $pertanyaan->ciri_id = $request->ciri_id;

        $pertanyaan->save();
        return redirect(route('pakar.pertanyaan.index'));
    }

    public function edit($id)
    {
        $this->authPakar();

        $data = [
            'id' => $id,
            'pertanyaan' => DaftarPertanyaan::find($id),
            'ciri_ciris' => CiriCiri::all()
        ];
        return Inertia::render('Pakar/TambahPertanyaan',$data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $this->authPakar();
        $pertanyaan = DaftarPertanyaan::find($id);
        $pertanyaan->pertanyaan = $request->pertanyaan;
        $pertanyaan->ciri_id = $request->ciri_id;
        $pertanyaan->save();
        return redirect(route('pakar.pertanyaan.index'));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DaftarPertanyaan $daftarPertanyaan)
    {
        $this->authPakar();
    }
}
