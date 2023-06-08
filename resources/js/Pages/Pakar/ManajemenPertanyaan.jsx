import SidebarPakar from "./SidebarPakar"
import TablePertanyaan from "./Partials/TablePertanyaan"
import { Button } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Head } from '@inertiajs/react';

export default function ManajemenPertanyaan(props){

    return(<>
    <SidebarPakar username={props.auth.user.username}>
        <Head>
            <title>Manajemen Pertanyaan</title>
        </Head>
        <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Pertanyaan</h1>
        <Button variant='contained' className="my-24 bg-[#98A8F8]" href={route('pakar.pertanyaan.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Pertanyaan</span></Button>
        <TablePertanyaan 
            datas={props.pertanyaans}
            route_for_show={''}
            route_for_edit={'pakar.pertanyaan.edit'}
            route_for_update={'pakar.pertanyaan.update'}
            route_for_delete={'pakar.pertanyaan.destroy'}
            message_where_delete={'Apakah anda yakin ?'}
        />
    </SidebarPakar>
    </>)
}