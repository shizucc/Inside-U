<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Kepribadian;
use Carbon\Carbon;

class AdminController extends Controller
{
    public function index() {
        // Mendapatkan data user dari DB
        $users = User::all();
        $total_user = $users->count();

        // Mendapatkan data kepribadian dari DB
        // Dimasukkan ke dalam associative array untuk menghitung total setiap kepribadian yang didapatkan user setiap diagnosa
        // Nama jenis kepribadian diubah menjadi kapital pada huruf pertama menggunakan ucfirst()
        $kepribadians = array();
        foreach(Kepribadian::orderBy('id')->get() as $kepribadian) {
            $kepribadians[ucfirst($kepribadian->jenis_kepribadian)] = 0;
        }

        $total_diagnosa = 0;
        $userbaru_bulanan = array_fill(0, 12, 0);
        $diagnosa_bulanan = array_fill(0, 12, 0);

        foreach($users as $user) {
            // Menambahkan jumlah user baru bulanan
            $bulanDibuat = $user->created_at->month - 1;
            $userbaru_bulanan[$bulanDibuat]++;

            $jml_diagnosa = count($user->kepribadians) / 4;
            if($jml_diagnosa == 0) continue; // Skip apabila user belum pernah melakukan diagnosa

            for($i = 0; $i < $jml_diagnosa; $i++) {
                // Menambahkan jumlah diagnosa bulanan
                $waktuDiagnosa = new Carbon($user->kepribadians[0+($i*4)]->pivot->waktu_diagnosa);
                $diagnosa_bulanan[$waktuDiagnosa->month - 1]++;

                // Menambahkan total kepribadian yang didapatkan user
                $tmp = $user->kepribadians->slice(0+($i*4), 4);
                $hasilDiagnosa = $tmp->reduce(function ($carry, $item) {
                    if ($carry == null) return $item;
                    return $item->pivot->persentase > $carry->pivot->persentase ? $item : $carry;
                });
                $kepribadians[ucfirst($hasilDiagnosa->jenis_kepribadian)]++;
            }
            $total_diagnosa += $jml_diagnosa;
        }

        // Mengumpulkan data untuk dikirim
        $data_dashboard = [
            'total_user' => $total_user,
            'total_diagnosa' => $total_diagnosa,
            'userbaru_bulanan' => $userbaru_bulanan,
            'diagnosa_bulanan' => $diagnosa_bulanan,
            'kepribadians' => $kepribadians,
        ];

        $data_to_send = [
            'data_dashboard' => $data_dashboard
        ];

        return Inertia::render('Admin/Index', $data_to_send);
    }
}
