import SidebarAdmin from "./Sidebar";
import TableAllUser from "./Partials/TableAllUser"
export default function ManajemenPakar(props){
    return (
        <>
            <SidebarAdmin>
                 <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Kepribadian</h1>
                 <TableAllUser/>
            </SidebarAdmin>
        </>
    );
}
