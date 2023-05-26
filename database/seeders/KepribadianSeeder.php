<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Seeder;
use App\Models\Kepribadian;

class KepribadianSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kepribadian::insert([
            [
                'jenis_kepribadian' => 'Sanguinis',
                'deskripsi' => "Sanguinis memiliki unsur kepribadian yang panas. Sanguinis ini dikenal memiliki pembawaan yang ceria, aktif dan optimis. Biasanya pribadi seperti ini sangat mudah bergaul dan mudah membangun suasana menjadi lebih menyenangkan. Sanguinis merupakan tipe yang suka menjadi pusat perhatian, ingin selalu disenangi oleh orang lain, memiliki rasa percaya diri yang tinggi, dan selalu senang dengan situasi yang gembira seperti pesta maupun berkumpul bersama teman-teman. Namun, sanguinis ini cenderung sulit untuk berkonsentrasi dan diajak serius, serta cenderung memberikan keputusan setelah berpikir pendek. Kepribadian sanguinis dikenal kreatif, maka kemampuan alami sanguinis juga baik jika memilih pekerjaan yang berhubungan dengan dunia hiburan, travel, fashion, kuliner, dan juga marketing.",
                'ilustrasi' => Storage::url('sanguinis.png')
            ],
            [
                'jenis_kepribadian' => 'Melankolis',
                'deskripsi' => "Melankolis memiliki unsur kepribadian yang basah. Melankolis dikenal memiliki pembawaan yang serius dan tekun sehingga dalam membuat perencanaan akan dilakukan secara detail. Melankolis biasanya juga dikenal dengan sifat perfeksionis karena mereka memiliki karakter cenderung rapi, teratur, terencana, dan mampu mempertimbangkan segala sesuatu setelah melihat hal-hal kecil. Orang dengan tipe ini cenderung suka mengatur orang lain, suka mengontrol semuanya sendiri, bicaranya dingin, sesuai aturan dan baku. Serta selalu ingin tahu dan mengejar jawaban sampai mendalam karena menginginkan kesempurnaan. Kepribadian alami melankolis akan sangat baik jika ia memilih menjadi manajer, akuntan, pekerja sosial dan administrasi.",
                'ilustrasi' => Storage::url('melankolis.png')
            ],
            [
                'jenis_kepribadian' => 'Koleris',
                'deskripsi' => "Koleris memiliki unsur kepribadian yang kering. Koleris ini dikenal memiliki pembawaan emosional, logis dan keras kepala. Kepribadian koleris merupakan tipe kepribadian seorang pemimpin. Koleris sangat suka mengatur, suka petualangan, suka tantangan baru dan tegas dalam mengambil keputusan, serta tidak mudah menyerah maupun mengalah. Kepribadian koleris juga dikenal suka menghabiskan waktu bersama orang-orang yang memiliki banyak pembicaraan serius. Kemampuan alami koleris akan baik jika ditempatkan pada pekerjaan yang terkait dengan teknologi, statistik, teknik dan bidang pemrograman.",
                'ilustrasi' => Storage::url('koleris.png')            ],
            [
                'jenis_kepribadian' => 'Plegmatis',
                'deskripsi' => "Plegmatis memiliki unsur kepribadian yang dingin. Plegmatis sering dikenal sebagai orang yang cinta damai. Karakter ini menunjukkan pribadi yang lebih tenang, cenderung diam, mudah diatur, suka mengalah dan tidak menyukai adanya konflik. Orang dengan kepribadian ini cenderung menyukai kehidupan yang damai-damai saja, namun pada saat dihadapkan dengan masalah, mereka akan cenderung kesulitan dalam mengambil keputusan dan sering menunda-nunda. Namun sifat buruk seorang plegmatis ialah sering memendam masalah karena tidak enak dengan orang lain sehingga merugikan hidupnya. Kepribadian alami plegmatis akan baik jika ditempatkan pada suatu pekerjaan seperti perawat, guru, psikolog, konseling.",
                'ilustrasi' => Storage::url('plegmatis.png')            ],
        ]);
    }
}
