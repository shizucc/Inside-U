<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CiriCiri;

class CiriCiriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CiriCiri::insert([
            // Ciri-ciri Sanguinis
            [
                'ciri' => 'senang bicara',
                'kepribadian_id' => 1
            ],
            [
                'ciri' => 'emosi bergejolak',
                'kepribadian_id' => 1
            ],
            [
                'ciri' => 'senang menolong',
                'kepribadian_id' => 1
            ],
            [
                'ciri' => 'tidak dapat dijadikan sandaran',
                'kepribadian_id' => 1
            ],
            [
                'ciri' => 'mood mudah berubah',
                'kepribadian_id' => 1
            ],
            [
                'ciri' => 'sedikit pelupa',
                'kepribadian_id' => 1
            ],
            [
                'ciri' => 'sulit berkonsentrasi',
                'kepribadian_id' => 1
            ],
            [
                'ciri' => 'kurang disiplin waktu',
                'kepribadian_id' => 1
            ],

            // Ciri-ciri Melankolis
            [
                'ciri' => 'disiplin waktu',
                'kepribadian_id' => 2
            ],
            [
                'ciri' => 'pesimis',
                'kepribadian_id' => 2
            ],
            [
                'ciri' => 'teratur dan terjadwal',
                'kepribadian_id' => 2
            ],
            [
                'ciri' => 'menyukai fakta-fakta',
                'kepribadian_id' => 2
            ],
            [
                'ciri' => 'cenderung menganalisa',
                'kepribadian_id' => 2
            ],
            [
                'ciri' => 'perfeksionis',
                'kepribadian_id' => 2
            ],
            [
                'ciri' => 'ingin segala sesuatu teratur',
                'kepribadian_id' => 2
            ],
            [
                'ciri' => 'mendominasi pembicaraan',
                'kepribadian_id' => 2
            ],

            // Ciri-ciri Koleris
            [
                'ciri' => 'suka mengatur',
                'kepribadian_id' => 3
            ],
            [
                'ciri' => 'suka memerintah',
                'kepribadian_id' => 3
            ],
            [
                'ciri' => 'tidak punya banyak temen',
                'kepribadian_id' => 3
            ],
            [
                'ciri' => 'tidak mau kalah',
                'kepribadian_id' => 3
            ],
            [
                'ciri' => 'senang dengan tantangan',
                'kepribadian_id' => 3
            ],
            [
                'ciri' => 'suka petualangan',
                'kepribadian_id' => 3
            ],
            [
                'ciri' => 'tegas',
                'kepribadian_id' => 3
            ],
            [
                'ciri' => 'tidak suka istilah tidak mungkin',
                'kepribadian_id' => 3
            ],

            // Ciri-ciri Plegmatis
            [
                'ciri' => 'tidak suka mencari masalah',
                'kepribadian_id' => 4
            ],
            [
                'ciri' => 'kurang bersemangat',
                'kepribadian_id' => 4
            ],
            [
                'ciri' => 'sikap dingin',
                'kepribadian_id' => 4
            ],
            [
                'ciri' => 'cenderung diam',
                'kepribadian_id' => 4
            ],
            [
                'ciri' => 'kalem',
                'kepribadian_id' => 4
            ],
            [
                'ciri' => 'pendengar yang baik',
                'kepribadian_id' => 4
            ],
            [
                'ciri' => 'suka menunda',
                'kepribadian_id' => 4
            ],
            [
                'ciri' => 'tidak takut perubahan',
                'kepribadian_id' => 4
            ],
        ]);
    }
}
