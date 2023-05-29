import TableIndex from "./Partials/TableIndex"
import SidebarPakar from "./SidebarPakar"

export default function Index(props){
  console.log(props)
  return(<>
    <SidebarPakar username = {props.auth.user.username} >
      <TableIndex datas={props.columns} />
    </SidebarPakar>
  </>)
}