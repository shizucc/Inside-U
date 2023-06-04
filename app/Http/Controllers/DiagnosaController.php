<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\User;
use App\Models\DaftarPertanyaan;
use App\Models\CiriCiri;
use App\Models\Kepribadian;
use App\Models\UserKepribadian;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class DiagnosaController extends Controller
{
    public function index() {
        $is_logged_in = (Auth::user() == null) ? false : true;
        if ($is_logged_in) {
            // Redirect apabila role user tidak sesuai
            $role = User::find(Auth::id())->role;

            if ($role == "admin") {
                return redirect()->route("admin.index");
            } elseif ($role == "pakar") {
                return redirect()->route("pakar.index");
            }
        }

        return Inertia::render('Home');
    }

    public function notice() {
        $is_logged_in = (Auth::user() == null) ? false : true;
        if ($is_logged_in) {
            // Redirect apabila role user tidak sesuai
            $role = User::find(Auth::id())->role;

            if ($role == "admin") {
                return redirect()->route("admin.index");
            } elseif ($role == "pakar") {
                return redirect()->route("pakar.index");
            }
        }

        return Inertia::render('Diagnosa/Peringatan');
    }

    public function pertanyaan() {
        $is_logged_in = (Auth::user() == null) ? false : true;
        if ($is_logged_in) {
            // Redirect apabila role user tidak sesuai
            $role = User::find(Auth::id())->role;

            if ($role == "admin") {
                return redirect()->route("admin.index");
            } elseif ($role == "pakar") {
                return redirect()->route("pakar.index");
            }
        }

        $data = [
            'pertanyaans' => DaftarPertanyaan::all()
        ];

        return Inertia::render('Diagnosa/DaftarPertanyaan', $data);
    }

    public function perhitungan(Request $request) {
        $is_logged_in = (Auth::user() == null) ? false : true;
        if ($is_logged_in) {
            // Redirect apabila role user tidak sesuai
            $role = User::find(Auth::id())->role;

            if ($role == "admin") {
                return redirect()->route("admin.index");
            } elseif ($role == "pakar") {
                return redirect()->route("pakar.index");
            }
        }



        $kepribadians = Kepribadian::all();
        $persentase = array(); // Untuk menyimpan persentase tiap kepribadian
        $total_gejala = array(); // Untuk menyimpan total gejala tiap kepribadian
        foreach($kepribadians as $kepribadian) {
            $id = $kepribadian->id;
            $persentase[$id] = 0;
            $total_gejala[$id] = 0;
        }

        // Hitung total gejala dan jawaban
        $pertanyaans = DaftarPertanyaan::all();
        $jawabans = $request->input('jawaban');
        $i = 0;
        foreach($pertanyaans as $pertanyaan) {
            $total_gejala[$pertanyaan->ciri->kepribadian_id]++;
            if ($jawabans[$i++] != 1) continue;
            $persentase[$pertanyaan->ciri->kepribadian_id]++;
        }

        // Mengubah jawaban dari fraksi menjadi persentase
        foreach($kepribadians as $kepribadian) {
            $id = $kepribadian->id;
            $persentase[$id] = $persentase[$id] / $total_gejala[$id] * 100;
        }

        // Memperbaiki total persentase lebih dari 100 persen
        $sum_persentase = array_sum($persentase);
        foreach($kepribadians as $kepribadian) {
            $id = $kepribadian->id;
            $persentase[$id] = $persentase[$id] / $sum_persentase * 100;
        }

        // Insert hasil diagnosa apabila login
        if ($is_logged_in) {
            $user_id = Auth::id();

            // Dapatkan id diagnosa terakhir, dan atur id diagnosa baru
            $diagnosa_id_latest = UserKepribadian::where('user_id', $user_id)
                            ->orderByDesc('diagnosa_id')
                            ->first();
            $diagnosa_id = ($diagnosa_id_latest == null) ? 1 : $diagnosa_id_latest->diagnosa_id + 1;
            $waktu = Carbon::now();
            foreach($persentase as $kepribadian_id => $nilai) {
                UserKepribadian::insert([
                    'user_id' => $user_id,
                    'diagnosa_id' => $diagnosa_id,
                    'kepribadian_id' => $kepribadian_id,
                    'persentase' => $nilai,
                    'waktu_diagnosa' => $waktu,
                ]);
            }
            // Redirect menuju halaman hasil diagnosa
            return redirect()->route('diagnosa.hasil', ['user_id' => $user_id, 'diagnosa_id' => $diagnosa_id]);
        }

        $data_diagnosa = Kepribadian::all();
        foreach ($data_diagnosa as $data) {
            $id = $data->id;
            $data['persentase'] = $persentase[$id];
        }

        $data = [
            'data_diagnosa' => $data_diagnosa,
            'data_diagnosa_ordered' => $data_diagnosa->sortByDesc('persentase')->values()->all()
        ];

        // Tampilkan halaman hasil
        return Inertia::render('Diagnosa/HasilDiagnosa', $data);
    }

    public function hasil($user_id, $diagnosa_id) {
        $is_logged_in = (Auth::user() == null) ? false : true;
        if ($is_logged_in) {
            // Redirect apabila role user tidak sesuai
            $role = User::find(Auth::id())->role;

            if (Auth::id() != $user_id) {
                return redirect()->route("home");
            }
        } else {
            return redirect()->route("home");
        }

        $data_diagnosa = UserKepribadian::join('kepribadians', 'user_kepribadian.kepribadian_id', '=', 'kepribadians.id')
                    ->where('user_id', $user_id)
                    ->where('diagnosa_id', $diagnosa_id)
                    ->get();

        $data = [
            'data_diagnosa' => $data_diagnosa,
            'data_diagnosa_ordered' => $data_diagnosa->sortByDesc('persentase')->values()->all()
        ];
        return Inertia::render('Diagnosa/HasilDiagnosa', $data);
    }
}
