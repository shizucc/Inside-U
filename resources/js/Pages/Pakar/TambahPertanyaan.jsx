import SidebarPakar from "./SidebarPakar"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BasicSelect from "@/Components/BasicSelect";

export default function TambahPertanyaan (){
    return (
        <SidebarPakar>
            <h1 className="text-3xl font-medium mb-16">Formulir Data Pertanyaan</h1>
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-1/2 p-6 text-center">
                    <h1 className="text-2xl font-medium mb-8">Masukkan Data Pertanyaan</h1>
                    <form action="">
                        <textarea type="text" className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-4" placeholder="Pertanyaan" />
                        <BasicSelect nama="Ciri-Ciri"></BasicSelect>

                        <button type="submit" className="h-[40px] w-4/5 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#5D6AAD] focus:bg-[#5D6AAD]"><AddRoundedIcon/><span>Buat Pertanyaan</span></button>
                    </form>
                </div>
                <div id="bg" className="w-1/2 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img src="img/ilustrasi_pertanyaan.png" alt="" className="w-8/12 m-auto" />
                </div>
            </div>
        </SidebarPakar>
    )
}