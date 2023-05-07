<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AdminController extends Controller
{
    public function index() {
        $users = User::all();
        $total_user = User::all()->count();
        $total_diagnosa = 0;
        $userbaru_bulanan = array_fill(0, 12, 0);
        $diagnosa_bulanan = array_fill(0, 12, 0);

        foreach($users as $user) {
            $bulanDibuat = $user->created_at->month - 1;
            $userbaru_bulanan[$bulanDibuat]++;

            $jml_diagnosa = count($user->kepribadians) / 4;
            if($jml_diagnosa == 0) continue;

            for($i = 0; $i < $jml_diagnosa; $i++) {
                $waktuDiagnosa = new Carbon($user->kepribadians[0+($i*4)]->pivot->waktu_diagnosa);
                $diagnosa_bulanan[$waktuDiagnosa->month - 1]++;
            }
            $total_diagnosa += $jml_diagnosa;
        }

        $data = [
            'total_user' => $total_user,
            'total_diagnosa' => $total_diagnosa,
            'userbaru_bulanan' => $userbaru_bulanan,
            'diagnosa_bulanan' => $diagnosa_bulanan,
        ];
        return Inertia::render('Admin/Index', $data);
    }
}
