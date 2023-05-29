import SidebarPakar from "./SidebarPakar"
import TablePertanyaan from "./Partials/TablePertanyaan"

export default function ManajemenPertanyaan(props){
    return(<>
    <SidebarPakar username={props.auth.user.username}>
        <TablePertanyaan datas={props.pertanyaans}/>
    </SidebarPakar>
    </>)
}