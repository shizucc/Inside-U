import SidebarPakar from "./SidebarPakar"
import TablePertanyaan from "./Partials/TablePertanyaan"
import { Button } from "@mui/material"
export default function ManajemenPertanyaan(props){
    return(<>
    <SidebarPakar username={props.auth.user.username}>
        <Button variant='contained' color='secondary' href={route('pakar.pertanyaan.create')} >Tambah Pertanyaan</Button>
        <TablePertanyaan 
        datas={props.pertanyaans}
        route_for_edit={'pakar.pertanyaan.edit'}
        route_for_update={'pakar.pertanyaan.update'}
        route_for_delete={'pakar.pertanyaan.destroy'}
        />
    </SidebarPakar>
    </>)
}