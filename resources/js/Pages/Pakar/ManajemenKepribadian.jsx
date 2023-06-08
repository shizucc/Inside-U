import TableKepribadian from "./Partials/TableKepribadian"
import SidebarPakar from "./SidebarPakar"
import { Button } from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Head } from '@inertiajs/react';

export default function ManajemenKepribadian(props){
    // console.log(props)
    return(<>
        <SidebarPakar username={props.auth.user.username}>
            <Head>
                <title>Manajemen Kepribadian</title>
            </Head>
            <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Kepribadian</h1>
            <button className="my-2 py-2 px-4 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#7286E8] duration-500 ease-in-out" href={route('pakar.kepribadian.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Kepribadian</span></button>
            <TableKepribadian
            datas={props.kepribadians} 
            route_for_show={''}
            route_for_edit={'pakar.kepribadian.edit'}
            route_for_update={'pakar.kepribadian.update'}
            route_for_delete={'pakar.kepribadian.destroy'}
            message_where_delete={'Anda akan kehilangan seluruh hasil diagnosa, ciri-ciri, dan pertanyaan dengan kepribadian ini, Apakah anda yakin ?'}
            />
        </SidebarPakar>
    </>)
}