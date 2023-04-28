<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Kepribadian;

class KepribadianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kepribadian::create(
            [
                'jenis_kepribadian' => 'sanguinis',
                'deskripsi' => fake()->paragraph(),
                'ilustrasi' => fake()->word() . '.png'
            ],
            [
                'jenis_kepribadian' => 'melankolis',
                'deskripsi' => fake()->paragraph(),
                'ilustrasi' => fake()->word() . '.png'
            ],
            [
                'jenis_kepribadian' => 'koleris',
                'deskripsi' => fake()->paragraph(),
                'ilustrasi' => fake()->word() . '.png'
            ],
            [
                'jenis_kepribadian' => 'plegmatis',
                'deskripsi' => fake()->paragraph(),
                'ilustrasi' => fake()->word() . '.png'
            ],
        );
    }
}
