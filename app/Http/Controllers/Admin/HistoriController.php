<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HistoriController extends Controller
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

        ];
        return Inertia::render('Admin/HistoriDiagnosa',$data);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
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
