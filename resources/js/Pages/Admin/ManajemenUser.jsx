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
                 <Button variant='contained' className="my-24 bg-[#98A8F8]" href={route('admin.user.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Akun User</span></Button>
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
