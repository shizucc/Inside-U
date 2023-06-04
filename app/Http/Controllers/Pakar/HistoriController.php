<?php

namespace App\Http\Controllers\Pakar;

use App\Http\Controllers\Controller;
use App\Models\UserKepribadian;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HistoriController extends Controller
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
            'historis'=> User::with('kepribadians')->orderBy('id', 'asc')->get()
        ];

        return Inertia::render('Pakar/HistoriDiagnosa',$data);
    }

    public function show(UserKepribadian $userKepribadian)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

}
