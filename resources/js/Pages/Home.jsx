import { Link } from '@inertiajs/react';
import Manfaat from "@/Components/Manfaat";
import Navbar from "@/Components/Navbar";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Home(){
    return (
        <>
            <Navbar>
                <div className="mt-10 mb-5 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[24px]">
                    <div className="grid-cols-2 grid">
                        <div className="pr-40">
                            <h1 className="font-poppins font-bold text-5xl text-[#263238]">
                                Yuk Kenali Dirimu!
                            </h1>
                            <h1 className="font-poppins py-[8px] w-[300px]">
                                Penasaran dengan tipe kepribadianmu? Lakukan tes di sini sekarang!
                            </h1>
                            <Link href={route('diagnosa.start')} className="font-bold bg-[#98A8F8] text-[#F9F9F9] py-[10px] px-[24px] rounded-[8px] transition ease-in-out duration-300 hover:bg-[#737EDE] hover:drop-shadow-lg" as="button">
                                Mulai Diagnosa <span><NavigateNextIcon/></span>
                            </Link>
                        </div>
                        <div className="mr-0 ml-auto">
                            <img src="img/illustrasi_home.png" alt="illustrasi1" className="h-52 w-auto"/>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-3/4">
                    <h1 className="text-center font-poppins font-bold text-2xl text-[#263238]">Apa sih manfaat mengetahui kepribadian diri?</h1>
                </div>
                <div className="flex object-center gap-40 justify-center">
                    <Manfaat gambar="img/ilustrasi_manfaat1.png" deskripsi="Dapat merencanakan masa depan dengan lebih baik"/>
                    <Manfaat gambar="img/ilustrasi_manfaat2.png" deskripsi="Mengetahui kekuatan dan kelemahan diri"/>
                    <Manfaat gambar="img/ilustrasi_manfaat3.png" deskripsi="Lebih mengenali diri sendiri"/>
                </div>
            </Navbar>
        </>
    );
}
