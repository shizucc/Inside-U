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
        Kepribadian::create([
            'jenis_kepribadian' => 'sanguinis'
        ]);
        Kepribadian::create([
            'jenis_kepribadian' => 'melankolis'
        ]);
        Kepribadian::create([
            'jenis_kepribadian' => 'koleris'
        ]);
        Kepribadian::create([
            'jenis_kepribadian' => 'plegmatis'
        ]);
    }
}
