<?php

namespace App\Http\Controllers\Pakar;

use App\Http\Controllers\Controller;
use App\Models\Kepribadian;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class KepribadianController extends Controller
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
            'kepribadians' => Kepribadian::all()
        ];
        return Inertia::render('Pakar/ManajemenKepribadian', $data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Kepribadian $kepribadian)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kepribadian $kepribadian)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kepribadian $kepribadian)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kepribadian $kepribadian)
    {
        //
    }
}