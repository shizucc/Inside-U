import SidebarAdmin from "./Sidebar";
import TablePakar from "./Partials/TablePakar"
import {Button} from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Head } from '@inertiajs/react';
export default function ManajemenPakar(props){
    return (
        <>
            <SidebarAdmin username={props.auth.user.username}>
                <Head>
                    <title>Manajemen Pakar</title>
                </Head>
                 <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Pakar</h1>
                 <button className="my-2 py-2 px-4 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#7286E8] duration-500 ease-in-out" href={route('admin.pakar.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Akun Pakar</span></button>
                 <TablePakar
                    datas={props.pakars}
                    route_for_edit={'admin.pakar.edit'}
                    route_for_update={'admin.pakar.update'}
                    route_for_delete={'admin.pakar.destroy'}
                    message_where_delete = {'Apakah anda yakin menghapus Pakar ini?'}
                 />
            </SidebarAdmin>
        </>
    );
}
