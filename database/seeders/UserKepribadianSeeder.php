<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserKepribadian;

class UserKepribadianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {   
        UserKepribadian::insert([
            [
                'user_id' => 1,
                'kepribadian_id' => 1,
                'diagnosa_id' => 1,
                'persentase' => 30,
                'waktu_diagnosa'=> Carbon::now()
                
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 2,
                'diagnosa_id' => 1,
                'persentase' => 20,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 3,
                'diagnosa_id' => 1,
                'persentase' => 10,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 4,
                'diagnosa_id' => 1,
                'persentase' => 25,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 1,
                'diagnosa_id' => 2,
                'persentase' => 10,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 2,
                'diagnosa_id' => 2,
                'persentase' => 15,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 3,
                'diagnosa_id' => 2,
                'persentase' => 20,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 4,
                'diagnosa_id' => 2,
                'persentase' => 35,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 2,
                'kepribadian_id' => 1,
                'diagnosa_id' => 1,
                'persentase' => 5,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 2,
                'kepribadian_id' => 2,
                'diagnosa_id' => 1,
                'persentase' => 15,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 2,
                'kepribadian_id' => 3,
                'diagnosa_id' => 1,
                'persentase' => 25,
                'waktu_diagnosa'=> Carbon::now()
            ],
            [
                'user_id' => 2,
                'kepribadian_id' => 4,
                'diagnosa_id' => 1,
                'persentase' => 35,
                'waktu_diagnosa'=> Carbon::now()
            ],
        ]);
    }
}
