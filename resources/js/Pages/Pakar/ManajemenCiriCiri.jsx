import TableCiriCiri from "./Partials/TableCiriCiri";
import SidebarPakar from "./SidebarPakar";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Head, Link } from '@inertiajs/react';

export default function ManajemenCiriCiri(props){
    
    return(
    <>
    <SidebarPakar username={props.auth.user.username}>
        <Head>
            <title>Manajemen Ciri-Ciri</title>
        </Head>
        <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Ciri-Ciri</h1>
        <Link className="my-3 py-3 px-5 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#7286E8] duration-500 ease-in-out" href={route('pakar.ciri.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Ciri Ciri</span></Link>
        <TableCiriCiri 
            datas={props.ciri_ciris}
            route_for_show={''}
            route_for_edit={'pakar.ciri.edit'}
            route_for_update={'pakar.ciri.update'}
            route_for_delete={'pakar.ciri.destroy'}
            message_where_delete={'Anda akan kehilangan seluruh pertanyaan dengan ciri-ciri ini, Apakah anda yakin ?'}
        />
    </SidebarPakar>
    </>
    )
}
