import { useState } from 'react';
import { useForm, Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Progressbar from '@/Pages/Diagnosa/Partials/Progressbar';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Pertanyaan from '@/Pages/Diagnosa/Partials/Pertanyaan';
import ControlButtons from '@/Pages/Diagnosa/Partials/ControlButtons';
import { Head } from '@inertiajs/react';

export default function DaftarPertanyaan(props) {
    const pertanyaans = props.pertanyaans.map(pertanyaan => pertanyaan.pertanyaan);
    const max_pertanyaan_in_page = 4; {/* Batas jumlah pertanyaan dalam 1 page */}
    const max_page_count = Math.ceil(pertanyaans.length / max_pertanyaan_in_page); {/* Hitung jumlah halaman yang diperlukan */}


    {/* Set state page */}
    const [page, setPage] = useState({
        page_number: 1,
        nomor_pertanyaan: 0
    });

    function prevPage() {
        setPage({
            page_number: page.page_number - 1,
            nomor_pertanyaan: page.nomor_pertanyaan - max_pertanyaan_in_page
        });
        {/* Pada fungsi setPageTerjawab di bawah, tidak mengoper variabel page.nomor_pertanyaan
            karena variabel tsb baru akan terupdate setelah keluar dari fungsi prevPage */}
        setPageTerjawab(isPageSemuaTerjawab(page.nomor_pertanyaan - max_pertanyaan_in_page));
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); {/* Go to top of page */}
    }

    function nextPage() {
        setPage({
            page_number: page.page_number + 1,
            nomor_pertanyaan: page.nomor_pertanyaan + max_pertanyaan_in_page
        });
        setPageTerjawab(isPageSemuaTerjawab(page.nomor_pertanyaan + max_pertanyaan_in_page));
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }


    {/* Set state jawaban, 0 -> none, 1 -> ya, 2 -> tidak */}
    const [jawabans, setJawabans] = useState(
        props.pertanyaans.map(pertanyaan => 0)
    );

    {/* Fungsi yang akan dijalankan setiap user menekan radio buttons */}
    function jawab(e) {
        {/* Parameter e adalah nilai radio button yang ditekan user, nilainya berupa
            'p1-yes' untuk radio button Ya pertanyaan 1,
            'p5-no' untuk radio button No pertanyaan 5, dst */}

        let tmp = new String(e).slice(1); {/* Buang huruf p */}

        {/* Dapatkan nomor pertanyaan (semua karakter sebelum tanda strip -)
            dan jawaban (satu karakter setelah tanda strip -, 'y' apabila Ya atau 'n' apabila Tidak) */}
        let nomor = "";
        let jawaban = 0;
        let flag = false;
        for (let c of tmp) {
            if (c == '-') {
                flag = true;
                continue;
            }
            if (flag) {
                switch (c) {
                    case 'y':
                        jawaban = 1;
                        break;
                    case 'n':
                        jawaban = 2;
                        break;
                    default:
                        jawaban = 0;
                        break;
                }
                break;
            }
            nomor += c;
        }
        +nomor--; {/* Ubah variabel nomor ke tipe number dan lakukan decrement */}
        let tmp_jawabans = jawabans;
        let new_progress = progress + progress_increment;
        new_progress = (new_progress >= 99) ? 100 : new_progress; // Mengatasi progress stuck di 99%
        if (tmp_jawabans[nomor] == 0) setProgress(new_progress); {/* Tingkatkan nilai progress bar hanya jika sebelumnya pertanyaan belum dijawab */}
        tmp_jawabans[nomor] = jawaban;
        setJawabans(tmp_jawabans);
        setPageTerjawab(isPageSemuaTerjawab(page.nomor_pertanyaan));
    }


    {/* Set state dan function untuk mengecek apakah dalam satu halaman, semua pertanyaan sudah terjawab? */}
    const [is_page_terjawab, setPageTerjawab] = useState(false);

    function isPageSemuaTerjawab(nomor_start) {
        const jawabans_sliced = jawabans.slice(nomor_start, nomor_start+max_pertanyaan_in_page);
        for (let i of jawabans_sliced) {
            if (i == 0) return false;
        }
        return true;
    }

    {/* Set nilai progress bar */}
    const [progress, setProgress] = useState(0);
    const progress_increment = 1/pertanyaans.length * 100;

    {/* Atur kondisi control buttons */}
    const prev_disabled = (page.page_number == 1) ? true : false;
    const next_disabled = (!is_page_terjawab) ? true : false;
    const show_submit = (page.page_number == max_page_count) ? true : false;

    {/* Ambil 4 pertanyaan */}
    const pertanyaans_sliced = pertanyaans.slice(page.nomor_pertanyaan, page.nomor_pertanyaan+max_pertanyaan_in_page);

    {/* useForm setup */}
    const { data, setData, post, processing, errors } = useForm({
        jawaban: jawabans,
    })

    const can_submit = (progress < 100 || processing) ? false : true;

    function submit(e) {
        e.preventDefault();
        post(route('diagnosa.perhitungan'));
    }


    return(
        <>
        <Navbar user={props.auth.user}>
            <Head>
                <title>Diagnosa Kepribadian</title>
            </Head>
            <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[28px] font-poppins bg-[url('/img/wave.svg')] bg-no-repeat">
                <h1 className="text-center font-semibold my-3 text-3xl text-[#1A1919]">Tes Kepribadian</h1>
                <h2 className="text-center">Pilih <b>Ya</b> atau <b>Tidak</b></h2>

                <div className="my-8">
                    <Progressbar value={progress}/>
                </div>

                <div className="pt-12">

                    {pertanyaans_sliced.map((pertanyaan, index) => {
                        const isFirst = index == 0 ? true : false;
                        const nomor = index + 1 + page.nomor_pertanyaan;
                        return(
                            <Pertanyaan
                                pertanyaan={pertanyaan}
                                nomor={nomor}
                                margin_top={!isFirst}
                                yes_checked={jawabans[nomor-1] == 1 ? true : false}
                                no_checked={jawabans[nomor-1] == 2 ? true : false}
                                onChange={e => jawab(e.target.value)}
                            />
                        );
                    })}

                </div>

                <ControlButtons
                    prev_disabled={prev_disabled}
                    next_disabled={next_disabled}
                    show_submit={show_submit}
                    can_submit={can_submit}
                    handleClickPrev={prevPage}
                    handleClickNext={nextPage}
                    handleSubmit={submit}
                />

            </div>
        </Navbar>
        </>
    );
}
