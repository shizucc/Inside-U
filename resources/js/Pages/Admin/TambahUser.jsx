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
                        <input type="text" className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-6" placeholder="Username" />
                        <input type="email" className=" peer w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg  mb-1" placeholder="Email"/>
                        <p class="mb-1 mt-0 invisible peer-invalid:visible text-pink-600 text-sm">
                            Tolong masukkan alamat email yang tepat
                        </p>
                        <input type="password" className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg  mb-6" placeholder="Password"/>
                        <BasicSelect/>
                        <button type="submit" className="h-[40px] w-4/5 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#5D6AAD] focus:bg-[#5D6AAD]"><AddRoundedIcon/><span>Buat Akun</span></button>
                    </form>
                </div>
                <div id="bg" className="w-3/5 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img src="img/ilustrasi_form.png" alt="" className="w-8/12 m-auto" />
                </div>
            </div>
        </SidebarAdmin>
    )
}