import TableKepribadian from "./Partials/TableKepribadian"
import SidebarPakar from "./SidebarPakar"


export default function ManajemenKepribadian(props){
    return(<>
        <SidebarPakar username={props.auth.user.username}>
            <TableKepribadian datas={props.kepribadians} />
        </SidebarPakar>
    </>)
}