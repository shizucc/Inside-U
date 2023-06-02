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
        DaftarPertanyaan::insert([
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
                'pertanyaan' => 'Ketika kamu sedang bergegas pergi ke suatu tempat, kemudian di tengah perjalanan menemui seseorang yang terjatuh dari kendaraannya, apakah kamu akan berhenti untuk menolongnya?',
                'ciri_id' => 3
            ],
            [
                'pertanyaan' => 'Apakah kamu orang yang cenderung kurang suka mendengarkan ketika temanmu sedang bercerita tentang masalah hidupnya?',
                'ciri_id' => 4
            ],
            [
                'pertanyaan' => 'Apakah kamu merasa moodmu mudah terpengaruh oleh hal-hal kecil?',
                'ciri_id' => 5
            ],
            [
                'pertanyaan' => 'Apakah kamu seseorang yang pelupa?',
                'ciri_id' => 6
            ],
            [
                'pertanyaan' => 'Apakah kamu sering merasa sulit berkonsentrasi dalam melakukan suatu hal?',
                'ciri_id' => 7
            ],
            [
                'pertanyaan' => 'Apakah kamu cenderung suka melanggar sebuah peraturan?',
                'ciri_id' => 8
            ],

            // Daftar Pertanyaan Melankolis
            [
                'pertanyaan' => 'Apakah kamu selalu berusaha untuk tepat waktu ketika memiliki janji dengan seseorang?',
                'ciri_id' => 9
            ],
            [
                'pertanyaan' => 'Tutup matamu sejenak dan bayangkan masa depanmu, apakah kamu melihat suatu masa depan yang cerah?',
                'ciri_id' => 10
            ],
            [
                'pertanyaan' => 'Apakah kamu suka membuat jadwal kegiatan sehari-harimu?',
                'ciri_id' => 11
            ],
            [
                'pertanyaan' => 'Apakah kamu suka mempelajari fakta-fakta dunia?',
                'ciri_id' => 12
            ],
            [
                'pertanyaan' => 'Ketika berjalan dari tempat A ke tempat B, apakah kamu suka mengamati keadaan sekitar selama perjalanan?',
                'ciri_id' => 13
            ],
            [
                'pertanyaan' => 'Apakah kamu seseorang yang perfeksionis?',
                'ciri_id' => 14
            ],
            [
                'pertanyaan' => 'Apakah kamu suka menata-nata kamarmu dan selalu berusaha untuk mengorganisir seisinya?',
                'ciri_id' => 15
            ],
            [
                'pertanyaan' => 'Dalam suatu perkumpulan, apakah kamu seseorang yang biasanya mendominasi pembicaraan?',
                'ciri_id' => 16
            ],

            // Daftar Pertanyaan Koleris
            [
                'pertanyaan' => 'Dalam suatu pekerjaan kelompok, apakah kamu seseorang yang sering mengajukan saran?',
                'ciri_id' => 17
            ],
            [
                'pertanyaan' => 'Apakah kamu cenderung suka menjadi seorang ketua pada suatu kelompok?',
                'ciri_id' => 18
            ],
            [
                'pertanyaan' => 'Apakah kamu merasa tidak punya banyak teman?',
                'ciri_id' => 19
            ],
            [
                'pertanyaan' => 'Apakah kamu seseorang yang cenderung tidak mau kalah?',
                'ciri_id' => 20
            ],
            [
                'pertanyaan' => 'Apakah kamu suka melakukan olahraga atau kegiatan ekstrem seperti sky diving, naik wahana tornado, dan semacamnya?',
                'ciri_id' => 21
            ],
            [
                'pertanyaan' => 'Apakah kamu suka berpetualang? Seperti mendaki gunung, contohnya.',
                'ciri_id' => 22
            ],
            [
                'pertanyaan' => 'Apakah kamu seseorang yang tegas?',
                'ciri_id' => 23
            ],
            [
                'pertanyaan' => '"Tidak ada yang tidak mungkin asalkan ada usaha." Apakah kamu seseorang yang berpegang teguh pada istilah tersebut?',
                'ciri_id' => 24
            ],

            // Daftar Pertanyaan Plegmatis
            [
                'pertanyaan' => 'Ketika kamu mendapati temanmu berbuat curang dalam suatu tes, apakah kamu akan melaporkannya kepada pihak yang berwenang?',
                'ciri_id' => 25
            ],
            [
                'pertanyaan' => 'Apakah kamu seseorang yang malas?',
                'ciri_id' => 26
            ],
            [
                'pertanyaan' => 'Ketika bertemu dengan orang baru, apakah kamu yang suka mengambil inisiatif memulai pembicaraan?',
                'ciri_id' => 27
            ],
            [
                'pertanyaan' => 'Apakah kamu seseorang yang cenderung diam kecuali kalau ada orang lain yang mengajak bicara?',
                'ciri_id' => 28
            ],
            [
                'pertanyaan' => 'Apakah kamu cenderung tidak panik ketika berada dalam tekanan?',
                'ciri_id' => 29
            ],
            [
                'pertanyaan' => 'Apakah kamu merasa sebagai seorang pendengar yang baik?',
                'ciri_id' => 30
            ],
            [
                'pertanyaan' => 'Apakah kamu suka menunda-nunda pekerjaan?',
                'ciri_id' => 31
            ],
            [
                'pertanyaan' => 'Apakah kamu suka mempelajari hal-hal baru yang bukan zona nyamanmu?',
                'ciri_id' => 32
            ],
        ]);
    }
}
