<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function index() {
        $data = [
            'users'=> User::with('kepribadians')->orderBy('id', 'asc')->get(),
        ];
        return Inertia::render('Admin/Index', $data);
    }
}
