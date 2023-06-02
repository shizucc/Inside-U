import TableKepribadian from "./Partials/TableKepribadian"
import SidebarPakar from "./SidebarPakar"
import { Button } from "@mui/material"

export default function ManajemenKepribadian(props){
    console.log(props)
    return(<>
        <SidebarPakar username={props.auth.user.username}>
        <Button variant='contained' color='secondary' href={route('pakar.kepribadian.create')} >Tambah Kepribadian</Button>
            <TableKepribadian 
            datas={props.kepribadians} 
            route_for_edit={'pakar.kepribadian.edit'}
            route_for_update={'pakar.kepribadian.update'}
            route_for_delete={'pakar.kepribadian.destroy'}
            />
        </SidebarPakar>
    </>)
}