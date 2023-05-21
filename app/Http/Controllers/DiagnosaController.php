<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\User;
use App\Models\DaftarPertanyaan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class DiagnosaController extends Controller
{
    public function index() {
        // Redirect apabila role user tidak sesuai
        $role = User::find(Auth::id())->role;

        if ($role == "admin") {
            return redirect()->route("admin.index");
        } elseif ($role == "pakar") {
            return redirect()->route("pakar.index");
        }

        return Inertia::render('Home');
    }

    public function notice() {
        // Redirect apabila role user tidak sesuai
        $role = User::find(Auth::id())->role;

        if ($role == "admin") {
            return redirect()->route("admin.index");
        } elseif ($role == "pakar") {
            return redirect()->route("pakar.index");
        }

        return Inertia::render('Diagnosa/Peringatan');
    }

    public function pertanyaan() {
        // Redirect apabila role user tidak sesuai
        $role = User::find(Auth::id())->role;

        if ($role == "admin") {
            return redirect()->route("admin.index");
        } elseif ($role == "pakar") {
            return redirect()->route("pakar.index");
        }

        $data = [
            'pertanyaans' => DaftarPertanyaan::all()
        ];

        return Inertia::render('Diagnosa/DaftarPertanyaan', $data);
    }
}
