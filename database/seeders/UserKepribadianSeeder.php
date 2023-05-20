<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserKepribadian;
use App\Models\User;

class UserKepribadianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        $jumlahUser = User::all()->count();
        $jumlahKepribadian = 4;
        $maxDate = Carbon::now()->year(2023)->month(12)->day(31)->hour(23)->minute(59)->second(59);

        function rand_persentase() {
            $persentase1 = rand(0, 35);
            $persentase2 = rand(0, 35);
            $persentase3 = rand(0, 30);
            $persentase4 = 100 - ($persentase1+$persentase2+$persentase3);
            $persentase = [$persentase1, $persentase2, $persentase3, $persentase4];
            shuffle($persentase);

            return $persentase;
        }

        for ($i = 0; $i < $jumlahUser; $i++) {
            if (User::find($i+1)->role != "user") continue;
            $jumlahDiagnosa = rand(0, 10);
            if ($jumlahDiagnosa == 0) continue;

            $date = Carbon::now()->year(2023)->month(12)->day(31)->hour(23)->minute(59)->second(59)->subDays(rand(30, 364))->addSeconds(rand(0, 86400));
            $persentase = rand_persentase();

            for ($j = 0; $j < $jumlahDiagnosa; $j++) {
                if ($date->gt($maxDate)) break;
                for ($k = 0; $k < $jumlahKepribadian; $k++) {
                    UserKepribadian::insert([
                        'user_id' => $i+1,
                        'diagnosa_id' => $j+1,
                        'kepribadian_id' => $k+1,
                        'persentase' => $persentase[$k],
                        'waktu_diagnosa' => $date
                    ]);

                }
                $date = $date->addDays(rand(0, 30))->addSeconds(rand(0, 86400));
                $persentase = rand_persentase();
            }
        }
    }
}
