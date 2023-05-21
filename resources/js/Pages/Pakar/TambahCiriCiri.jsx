import SidebarPakar from "./SidebarPakar"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BasicSelect from "@/Components/BasicSelect";

export default function TambahCiriCiri (){
    return (
        <SidebarPakar>
            <h1 className="text-3xl font-medium mb-16">Formulir Data Ciri-Ciri</h1>
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-2/5 p-6 text-center">
                    <h1 className="text-2xl font-medium mb-8">Masukkan Data Ciri-Ciri</h1>
                    <form action="">
                        <textarea type="text" className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-4" placeholder="Ciri Ciri" />
                        <BasicSelect nama="Jenis Kepribadian"></BasicSelect>

                        <button type="submit" className="h-[40px] w-4/5 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#5D6AAD] focus:bg-[#5D6AAD]"><AddRoundedIcon/><span>Buat Ciri Ciri</span></button>
                    </form>
                </div>
                <div id="bg" className="w-3/5 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img src="img/ilustrasi_ciriciri.png" alt="" className="w-8/12 m-auto" />
                </div>
            </div>
        </SidebarPakar>
    )
}