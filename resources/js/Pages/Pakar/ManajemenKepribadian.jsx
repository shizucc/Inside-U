import TableKepribadian from "./Partials/TableKepribadian"
import SidebarPakar from "./SidebarPakar"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Head, Link } from '@inertiajs/react';

export default function ManajemenKepribadian(props){
    return(<>
        <SidebarPakar username={props.auth.user.username}>
            <Head>
                <title>Manajemen Kepribadian</title>
            </Head>
            <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Kepribadian</h1>
            <Link className="my-3 py-3 px-5 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#7286E8] duration-500 ease-in-out" href={route('pakar.kepribadian.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Kepribadian</span></Link>
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