import SidebarPakar from "./SidebarPakar";
import BasicSelect from "@/Components/BasicSelect";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function TambahKepribadian(){
    return (
        <SidebarPakar>
            <h1 className="text-3xl font-medium mb-16">Formulir Kepribadian</h1>
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-2/5 p-6 text-center">
                    <h1 className="text-2xl font-medium mb-8">Masukkan Data Kepribadian</h1>
                    <form action="">
                        <input type="text" className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-4" placeholder="Kepribadian" />
                        <textarea className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-sm  mb-4" placeholder="Deskripsi"/>
                        <input type="file" className="w-4/5 file:border file:bg-white file:rounded-md  file:mb-4"/>

                        <button type="submit" className="h-[40px] w-4/5 bg-[#98A8F8] text-white rounded-lg font-medium"><AddRoundedIcon/><span>Tambah Kepribadian</span></button>
                    </form>
                </div>
                <div id="bg" className="w-3/5 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img src="img/ilustrasi_form.png" alt="" className="w-8/12 m-auto" />
                </div>
            </div>
        </SidebarPakar>
    )
}