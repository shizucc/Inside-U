import TableCiriCiri from "./Partials/TableCiriCiri";
import SidebarPakar from "./SidebarPakar";
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

export default function ManajemenCiriCiri(props){
    
    return(
    <>
    <SidebarPakar username={props.auth.user.username}>
        <Button variant='contained' color='secondary' href={route('pakar.ciri.create')} >Tambah Ciri-Ciri</Button>
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
