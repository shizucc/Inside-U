import SidebarPakar from "./SidebarPakar"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import BasicSelect from '@mui/material/Select';
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Autocomplete,TextField } from "@mui/material";
import { Head } from '@inertiajs/react';

export default function TambahPertanyaan (props){
    
    const [pertanyaan,setPertanyaan] = useState(props.id ? props.pertanyaan.pertanyaan : '')
    const [ciri,setCiri] = useState(
        (props.id? props.ciri_ciris.find((ciri)=> ciri.id==props.pertanyaan.ciri_id) : null)
    )
    const {data,setData,post,put} = useForm({
        pertanyaan : pertanyaan,
        ciri_id : ciri
    })

    useEffect(() => {
        setData('pertanyaan',pertanyaan)
    },[pertanyaan])

    useEffect(() => {
        setData('ciri_id', ciri)
    },[ciri])

    const handlePertanyaan = (event) => {
        setPertanyaan(event.target.value)
    }
    const handleCiri = (event,value) => {
        setCiri(value)
    }

    const submit = (event) => {
        event.preventDefault()
        if(props.id){
            put(route('pakar.pertanyaan.update',props.id ))
        }else 
            post(route('pakar.pertanyaan.store'))
    }

    

    return (
        <SidebarPakar>
            <Head>
                <title>Tambah Pertanyaan</title>
            </Head>
            <h1 className="text-3xl font-medium mb-16">Formulir Data Pertanyaan</h1>
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-1/2 p-6 text-center">
                    <h1 className="text-2xl font-medium mb-8">Masukkan Data Pertanyaan</h1>
                    <form onSubmit={submit}>
                        <textarea 
                            required 
                            type="text" 
                            className="w-full border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg" 
                            placeholder="Pertanyaan"
                            value={pertanyaan}
                            onChange={handlePertanyaan}
                        />

                        <Autocomplete
                            required
                            className="w-full my-5"
                            disablePortal
                            id='combo-box-demo'
                            options={props.ciri_ciris}
                            getOptionLabel={(option)=>(option.ciri.charAt(0).toUpperCase()+(option.ciri).slice(1))}
                            value={ciri}
                            onChange={handleCiri}
                            renderInput={(params)=> <TextField {...params} label='Ciri' />}
                        >
                        </Autocomplete>

                        <button type="submit" className="h-[50px] w-full bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#7286E8] duration-500 ease-in-out"><AddRoundedIcon/>
                        <span>
                            {props.id? 'Update Pertanyaan' : 'Tambah Pertanyaan'}
                        </span>
                        </button>
                    </form>
                </div>
                <div id="bg" className="w-1/2 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img src="img/ilustrasi_pertanyaan.png" alt="" className="w-8/12 m-auto z-10" />
                </div>
            </div>
        </SidebarPakar>
    )
}