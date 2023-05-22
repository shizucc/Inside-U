import SidebarPakar from './SidebarPakar'

export default function DashboardPakar(props){
    return(<>
        <SidebarPakar usename={props.auth.user.username}/>
    </>)
}