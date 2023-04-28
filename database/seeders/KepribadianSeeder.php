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
            ['jenis_kepribadian' => 'sanguinis'],
            ['jenis_kepribadian' => 'melankolis'],
            ['jenis_kepribadian' => 'koleris'],
            ['jenis_kepribadian' => 'plegmatis'],
        );
    }
}
