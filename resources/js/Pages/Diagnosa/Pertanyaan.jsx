import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ProgressBar from "@ramonak/react-progress-bar";

export default function Pertanyaan() {
    return(
        <>
        <Navbar>
            <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[28px] font-poppins bg-[url('/img/wave.svg')]">
                <h1 className="text-center font-semibold my-3 text-2xl text-[#1A1919]">Tes Kepribadian</h1>
                <h2 className="text-center">Pilih <b>Ya</b> atau <b>Tidak</b></h2>

                <div className="my-10">
                    <div className="grid grid-cols-2 mx-2">
                        <h3 className="text-left">Progress</h3>
                        <h3 className="text-right">60%</h3>
                    </div>
                    <ProgressBar completed={60} baseBgColor="#D9D9D9" bgColor="#E5C727" height="11px" customLabel=" "/>
                </div>

            </div>
        </Navbar>
        </>
    );
}
