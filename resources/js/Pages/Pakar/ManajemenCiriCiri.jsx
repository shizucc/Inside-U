import TableCiriCiri from "./Partials/TableCiriCiri";
import SidebarPakar from "./SidebarPakar";
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function ManajemenCiriCiri(props){
    
    return(
    <>
    <SidebarPakar username={props.auth.user.username}>
        <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Ciri-Ciri</h1>
        <Button variant='contained' className="my-24 bg-[#98A8F8]" href={route('pakar.ciri.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Ciri Ciri</span></Button>
        <TableCiriCiri 
            datas={props.ciri_ciris}
            route_for_edit={'pakar.ciri.edit'}
            route_for_update={'pakar.ciri.update'}
            route_for_delete={'pakar.ciri.destroy'}
        />
    </SidebarPakar>
    </>
    )
}
