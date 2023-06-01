<?php

namespace App\Http\Controllers\Pakar;

use App\Http\Controllers\Controller;
use App\Models\CiriCiri;
use App\Models\Kepribadian;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CiriController extends Controller
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
            'ciri_ciris' => CiriCiri::with('kepribadian')->get()
        ];
        return Inertia::render('Pakar/ManajemenCiriCiri', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $this->authPakar();
        $data = [
            'kepribadians' => Kepribadian::all()
        ];
        return Inertia::render('Pakar/TambahCiriCiri',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) : RedirectResponse
    {
        $ciri_ciri = new CiriCiri;

        $ciri_ciri->ciri = strtolower($request->ciri);
        $ciri_ciri->kepribadian_id = $request->kepribadian_id;

        $ciri_ciri->save();

        return redirect(route('pakar.ciri.index'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CiriCiri $ciriCiri)
    {
        dd($ciriCiri);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CiriCiri $ciriCiri)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CiriCiri $ciriCiri)
    {
        //
    }
}
