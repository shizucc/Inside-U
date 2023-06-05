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
            'pakars' => User::where('role','pakar')->orderBy('id')->get()
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
            'signature' => "pakar",
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
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $this->authAdmin();
        $data = [
            'signature' => 'pakar',
            'roles' => User::distinct()->get(['role']),
            'user' => User::find($id)
        ];
        return Inertia::render('Admin/TambahUser', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
       
        $user = User::find($request->input('id'));
        $user->username = $request->input('username');
        $user->password = Hash::make($request->input('password'));
        $user->email = $request->input('email');
        $user->save();
        
        return redirect(route('admin.pakar.index'));
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $this->authAdmin();
        $user = User::find($id);
        $user->delete();
        return redirect(route('admin.pakar.index'));

    }
}
