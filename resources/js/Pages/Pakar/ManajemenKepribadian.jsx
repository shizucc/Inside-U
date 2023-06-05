import TableKepribadian from "./Partials/TableKepribadian"
import SidebarPakar from "./SidebarPakar"
import { Button } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Head } from '@inertiajs/react';

export default function ManajemenKepribadian(props){
    
    return(<>
        <SidebarPakar username={props.auth.user.username}>
            <Head>
                <title>Manajemen Kepribadian</title>
            </Head>
            <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Kepribadian</h1>
            <Button variant='contained' className="my-24 bg-[#98A8F8]" href={route('pakar.kepribadian.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Kepribadian</span></Button>
            <TableKepribadian
            datas={props.kepribadians} 
            route_for_show={''}
            route_for_edit={'pakar.kepribadian.edit'}
            route_for_update={'pakar.kepribadian.update'}
            route_for_delete={'pakar.kepribadian.destroy'}
            />
        </SidebarPakar>
    </>)
}