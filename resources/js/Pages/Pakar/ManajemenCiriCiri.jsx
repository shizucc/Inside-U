import TableCiriCiri from "./Partials/TableCiriCiri";
import SidebarPakar from "./SidebarPakar";

export default function ManajemenCiriCiri(props){
    return(
    <>
    <SidebarPakar username={props.auth.user.username}>
        <TableCiriCiri datas={props.ciri_ciris} fields ={['Ciri-Ciri', 'Kepribadian Terkait']}/>
    </SidebarPakar>
    </>
    )
}
