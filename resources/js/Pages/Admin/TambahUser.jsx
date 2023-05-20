import SidebarAdmin from "./Sidebar"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BasicSelect from "@/Components/BasicSelect";

export default function TambahUser (){
    return (
        <SidebarAdmin>
            <h1 className="text-3xl font-medium mb-16">Masukkan Data Akun</h1>
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-2/5 p-6 text-center">
                    <h1 className="text-2xl font-medium mb-8">Formulir Akun</h1>
                    <form action="">
                        <input type="text" className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-4" placeholder="Username" />
                        <input type="email" className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg  mb-4" placeholder="Email"/>
                        <input type="password" className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg  mb-4" placeholder="Password"/>
                        <BasicSelect/>
                        <button type="submit" className="h-[40px] w-4/5 bg-[#98A8F8] text-white rounded-lg font-medium"><AddRoundedIcon/><span>Buat Akun</span></button>
                    </form>
                </div>
                <div id="bg" className="w-3/5 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img src="img/ilustrasi_form.png" alt="" className="w-8/12 m-auto" />
                </div>
            </div>
        </SidebarAdmin>
    )
}