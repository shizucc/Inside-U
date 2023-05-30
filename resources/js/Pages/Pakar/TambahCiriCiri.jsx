import React from 'react';
import SidebarPakar from "./SidebarPakar";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TambahCiriCiri(props) {
    const [kepribadian, setKepribadian] = React.useState('');

    const handleChange = (event) => {
        setKepribadian(event.target.value);
    };
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
                    <form action="">
                        <TextField id="outlined-basic" label="Ciri-Ciri" variant="outlined" />
                        <InputLabel id="demo-simple-select-label">Kepribadian</InputLabel>
                        <Box className="w-4/5 text-left m-auto h-[40px] mb-8">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={kepribadian}
                            label="kepribadian"
                            onChange={handleChange}
                        >
                            {(props.kepribadians).map(kepribadian => {
                                return(
                                <MenuItem value={kepribadian.id}>{kepribadian.jenis_kepribadian}</MenuItem>
                                )
                            })}
                        </Select>
                        </Box>
                        <button
                            type="submit"
                            className="h-[40px] w-4/5 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#5D6AAD] focus:bg-[#5D6AAD]"
                        >
                            <AddRoundedIcon />
                            <span>Buat Ciri Ciri</span>
                        </button>
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
