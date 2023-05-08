import Navbar from '@/Components/Navbar';

export default function Notice() {
    return(
        <Navbar>
            <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[24px]">
                    <a href="#">
                        <span className="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#98A8F8" className="flex w-5 h-5 my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <p className="text-[#98A8F8] font-poppins font-semibold text-lg" href="#">Kembali</p>
                        </span>
                    </a>
                <h1 className="text-center font-poppins font-bold my-3 text-2xl text-red-500">*Baca Sebelum Diagnosa!*</h1>
                <img
                    className="mx-auto my-10"
                    src="img/ilustrasi_notice_diagnosa.png" alt="Gambar peringatan sebelum melakukan diagnosa"
                />
                <div className="container mx-auto">
                <ol className="justify-center list-decimal">
                    <li>Diagnosa ini tidak ditujukan untuk medis</li>
                    <li>Hasil diagnosa dapat beragam sesuai dengan jawaban pertanyaan yang anda pilih</li>
                    <li>Pembuat website tidak bertanggung jawab atas hasil diagnosa yang diperoleh</li>
                </ol>
                </div>
            </div>
        </Navbar>
    );
}
