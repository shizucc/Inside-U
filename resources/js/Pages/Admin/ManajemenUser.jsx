import SidebarAdmin from "./Sidebar";
import TableUser from "./Partials/TableUser"
import {Button} from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Head } from '@inertiajs/react';
export default function ManajemenPakar(props){
    return (
        <>
            <SidebarAdmin username={props.auth.user.username}>
                <Head>
                    <title>Manajemen User</title>
                </Head>
                 <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen User</h1>
                 <button className="my-2 py-2 px-4 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#7286E8] duration-500 ease-in-out" href={route('admin.user.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Akun User</span></button>
                 <TableUser
                    datas={props.users}
                    route_for_edit={'admin.user.edit'}
                    route_for_update={'admin.user.update'}
                    route_for_delete={'admin.user.destroy'}
                    message_where_delete = {'Anda akan kehilangan semua riwayat diagnosa dari user ini, apakah anda yakin?'}
                 />
            </SidebarAdmin>
        </>
    );
}
