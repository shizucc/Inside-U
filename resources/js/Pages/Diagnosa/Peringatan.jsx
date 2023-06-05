import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Head } from '@inertiajs/react';

export default function Peringatan(props) {
    return(
        <>
        <Navbar user={props.auth.user}>
            <Head>
                <title>Peringatan Diagnosa</title>
            </Head>
            <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[24px] font-poppins">
                    <Link href={route('home')} as="button">
                        <span className="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#98A8F8" className="flex w-5 h-5 my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <p className="text-[#98A8F8] font-semibold text-lg hover:underline" href="#">Kembali</p>
                        </span>
                    </Link>
                <h1 className="text-center font-bold my-3 text-2xl text-red-500">*Baca Sebelum Diagnosa!*</h1>
                <img
                    className="mx-auto my-10"
                    src="img/ilustrasi_notice_diagnosa.png" alt="Gambar peringatan sebelum melakukan diagnosa"
                />
                <div className="container mx-auto pl-20 w-2/3">
                    <ol className="list-decimal font-medium text-md">
                        <li>Diagnosa ini tidak ditujukan untuk medis</li>
                        <li>Hasil diagnosa dapat beragam sesuai dengan jawaban pertanyaan yang anda pilih</li>
                        <li>Pembuat website tidak bertanggung jawab atas hasil diagnosa yang diperoleh</li>
                    </ol>
                    <div className="mx-auto w-1/2 mt-10">
                        <Link href={route('diagnosa.pertanyaan')} className="font-bold bg-[#98A8F8] text-[#F9F9F9] py-3 px-6 rounded-[8px] transition ease-in-out duration-300 hover:bg-[#737EDE] hover:drop-shadow-lg" as="button">
                            Mulai Diagnosa <span><NavigateNextIcon/></span>
                        </Link>
                    </div>
                </div>
            </div>
        </Navbar>
        </>
    );
}
