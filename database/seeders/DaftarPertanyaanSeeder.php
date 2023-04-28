<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DaftarPertanyaan;

class DaftarPertanyaanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DaftarPertanyaan::create(
            // Daftar Pertanyaan Sanguinis
            [
                'pertanyaan' => 'Apakah Anda seseorang yang suka berbicara?',
                'ciri_id' => 1
            ],
            [
                'pertanyaan' => 'Apakah Anda mudah marah?',
                'ciri_id' => 2
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 3
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 4
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 5
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 6
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 7
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 8
            ],

            // Daftar Pertanyaan Melankolis
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 9
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 10
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 11
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 12
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 13
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 14
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 15
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 16
            ],

            // Daftar Pertanyaan Koleris
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 17
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 18
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 19
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 20
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 21
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 22
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 23
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 24
            ],

            // Daftar Pertanyaan Plegmatis
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 25
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 26
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 27
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 28
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 29
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 30
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 31
            ],
            [
                'pertanyaan' => fake()->sentence(),
                'ciri_id' => 32
            ],
        );
    }
}
