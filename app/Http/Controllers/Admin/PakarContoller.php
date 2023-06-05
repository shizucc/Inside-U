<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Inertia\Inertia;
class PakarContoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function authAdmin(){

        $role = User::find(Auth::id())->role;
    
        if ($role == "user") {
            return redirect()->route("home");
        } elseif ($role == "pakar") {
            return redirect()->route("pakar.index");
        }
    }

    public function index()
    {
        $this->authAdmin();
        $data = [
            'pakars' => User::where('role','pakar')->get()
        ];

        return Inertia::render('Admin/ManajemenPakar',$data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $this->authAdmin();
        $data =[
            'roles' => User::distinct()->get(['role'])
        ];
        return Inertia::render('Admin/TambahUser',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required'],
            'role' => 'required|string'
        ]);

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        event(new Registered($user));
        return redirect(route('admin.pakar.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
