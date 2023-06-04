import React from 'react';
import SidebarPakar from "./SidebarPakar";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BasicSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from '@inertiajs/react';


export default function TambahCiriCiri(props) {
    console.log(props)
    const [kepribadian,setKepribadian] = React.useState(props.id ? props.ciri_ciri.kepribadian_id : 1)
    const [ciri_ciri,setCiri] = React.useState(props.id? props.ciri_ciri.ciri : '')
    const {data, setData,post,put} = useForm({
        ciri : ciri_ciri,
        kepribadian_id : kepribadian
    })

    React.useEffect(() => {
        setData('kepribadian_id', kepribadian);
      }, [kepribadian]);
    
    React.useEffect(()=>{
        setData('ciri',ciri_ciri)
    },[ciri_ciri])

    const handleCiri = (event) => {
        setCiri(event.target.value)
    }

    const handleKepribadian = (event) => {
        setKepribadian(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()
        if(props.id){
            put(route('pakar.ciri.update',props.id ))
        }else 
            post(route('pakar.ciri.store'))
    }

    return (
        <SidebarPakar>
            <h1 className="text-3xl font-medium mb-16">
                Formulir Data Ciri-Ciri
            </h1>
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-2/5 p-6 text-center">
                    <h1 className="text-2xl font-medium mb-8">
                        Masukkan Data Ciri-Ciri
                    </h1>
                    <form onSubmit={submit}>
                        <Box className="w-4/5 text-left m-auto h-[160px] mb-8">
                        <TextField 
                            required
                            className="w-full" 
                            id="outlined-basic" 
                            label="Ciri-Ciri" 
                            variant="outlined" 
                            value={ciri_ciri}
                            onChange={handleCiri}
                        />
                        
                        <BasicSelect
                            required
                            className="my-5 w-full"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={kepribadian}
                            onChange={handleKepribadian}
                        >
                            {(props.kepribadians).map(kepribadian => {
                                return(
                                <MenuItem value={kepribadian.id}>{kepribadian.jenis_kepribadian}</MenuItem>
                                )
                            })}
                        </BasicSelect>
                        <br />
                        <button
                            type="submit"
                            className="h-[40px] w-full bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#7286E8] duration-500 ease-in-out"
                            >
                            <AddRoundedIcon />
                            <span>
                                {props.id? 'Update Ciri-Ciri' : 'Tambah Ciri-Ciri'}
                                </span>
                        </button>
                        </Box>
                    </form>
                </div>
                <div id="bg" className="w-3/5 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img
                        src="img/ilustrasi_ciriciri.png"
                        alt=""
                        className="w-8/12 m-auto"
                    />
                </div>
            </div>
        </SidebarPakar>
    );
}
