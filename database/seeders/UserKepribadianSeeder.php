<?php

namespace Database\Seeders;

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
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 2,
                'diagnosa_id' => 1,
                'persentase' => 20,
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 3,
                'diagnosa_id' => 1,
                'persentase' => 10,
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 4,
                'diagnosa_id' => 1,
                'persentase' => 25,
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 1,
                'diagnosa_id' => 2,
                'persentase' => 10,
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 2,
                'diagnosa_id' => 2,
                'persentase' => 15,
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 3,
                'diagnosa_id' => 2,
                'persentase' => 20,
            ],
            [
                'user_id' => 1,
                'kepribadian_id' => 4,
                'diagnosa_id' => 2,
                'persentase' => 35,
            ],
            [
                'user_id' => 2,
                'kepribadian_id' => 1,
                'diagnosa_id' => 1,
                'persentase' => 5,
            ],
            [
                'user_id' => 2,
                'kepribadian_id' => 2,
                'diagnosa_id' => 1,
                'persentase' => 15,
            ],
            [
                'user_id' => 2,
                'kepribadian_id' => 3,
                'diagnosa_id' => 1,
                'persentase' => 25,
            ],
            [
                'user_id' => 2,
                'kepribadian_id' => 4,
                'diagnosa_id' => 1,
                'persentase' => 35,
            ],
        ]);
    }
}
