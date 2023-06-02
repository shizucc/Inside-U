import SidebarPakar from "./SidebarPakar";
import BasicSelect from "@/Components/BasicSelect";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function TambahKepribadian(props){
    const [kepribadian,setKepribadian] =  useState(props.id? props.jenis_kepribadian : '')
    const [deskripsi,setDeskripsi] = useState(props.id? props.deskripsi : '')
    const {data,setData,post} = useForm({
        jenis_kepribadian : kepribadian,
        deskripsi : deskripsi
    })

    useEffect(()=>{
        setData('jenis_kepribadian', kepribadian)
    },[kepribadian])

    useEffect(()=>{
        setData('deskripsi',deskripsi)
    },[deskripsi])

    const handleKepribadian = (event) =>{
        setKepribadian(event.target.value)
    }
    const handleDeskripsi = (event) => {
        setDeskripsi(event.target.value)
    }
    
    return (
        <SidebarPakar>
            <h1 className="text-3xl font-medium mb-16">Formulir Kepribadian</h1>
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-3/5 p-6 text-left">
                    <h1 className="text-2xl font-medium mb-8">Masukkan Data Kepribadian</h1>
                    <form action="" className="w-full">
                        <input 
                            required
                            type="text" 
                            className="w-full border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-4"
                            placeholder="Kepribadian"
                            value={kepribadian}
                            onChange={handleKepribadian} 
                        />
                        <textarea 
                            required
                            className="w-full border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg  mb-4" 
                            placeholder="Deskripsi"
                            value={deskripsi}
                            onChange={handleDeskripsi}
                        />
                        <input type="file" className="w-full file:border file:bg-white file:rounded-md  file:mb-4"/>

                        <button type="submit" className="h-[40px] w-2/5 bg-[#98A8F8] text-white rounded-lg font-medium"><AddRoundedIcon/><span>Tambah Kepribadian</span></button>
                    </form>
                </div>
                <div id="bg" className="w-2/5 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img src="img/ilustrasi_kepribadian.png" alt="" className="w-1/1 m-auto" />
                </div>
            </div>
        </SidebarPakar>
    )
}