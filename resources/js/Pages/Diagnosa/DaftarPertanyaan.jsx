import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Progressbar from '@/Pages/Diagnosa/Partials/Progressbar';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Pertanyaan from '@/Pages/Diagnosa/Partials/Pertanyaan';
import ControlButtons from '@/Pages/Diagnosa/Partials/ControlButtons';

export default function DaftarPertanyaan(props) {
    const pertanyaans = props.pertanyaans.map(pertanyaan => pertanyaan.pertanyaan);
    const max_pertanyaan_in_page = 4; {/* Batas jumlah pertanyaan dalam 1 page */}
    const max_page_count = Math.ceil(pertanyaans.length / max_pertanyaan_in_page); {/* Beri batas 4 pertanyaan dalam 1 page */}


    {/* Set state page */}
    const [page, setPage] = useState({
        page_number: 1,
        nomor_pertanyaan: 0
    });

    function prevPage() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); {/* Go to top of page */}
        setPage({
            page_number: page.page_number - 1,
            nomor_pertanyaan: page.nomor_pertanyaan - max_pertanyaan_in_page
        });
        {/* Pada fungsi setPageTerjawab di bawah, tidak mengoper variabel page.nomor_pertanyaan
            karena variabel tsb baru akan terupdate setelah keluar dari fungsi prevPage */}
        setPageTerjawab(isPageSemuaTerjawab(page.nomor_pertanyaan - max_pertanyaan_in_page));
    }

    function nextPage() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setPage({
            page_number: page.page_number + 1,
            nomor_pertanyaan: page.nomor_pertanyaan + max_pertanyaan_in_page
        });
        setPageTerjawab(isPageSemuaTerjawab(page.nomor_pertanyaan + max_pertanyaan_in_page));
    }


    {/* Set state jawaban, 0 -> none, 1 -> ya, 2 -> tidak */}
    const [jawabans, setJawabans] = useState(
        props.pertanyaans.map(pertanyaan => 0)
    );

    function jawab(e) {
        let tmp = new String(e).slice(1);
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
        tmp_jawabans[nomor] = jawaban;
        setJawabans(tmp_jawabans);
        setPageTerjawab(isPageSemuaTerjawab(page.nomor_pertanyaan));
        setProgress(progress + progress_increment);
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
    const can_submit = (progress < 100) ? false : true;

    {/* Ambil 4 pertanyaan */}
    const pertanyaans_sliced = pertanyaans.slice(page.nomor_pertanyaan, page.nomor_pertanyaan+max_pertanyaan_in_page);


    return(
        <>
        <Navbar>
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
                />

            </div>
        </Navbar>
        </>
    );
}
