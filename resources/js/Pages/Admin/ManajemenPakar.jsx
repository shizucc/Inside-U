import SidebarAdmin from "./Sidebar";
import TablePakar from "./Partials/TablePakar"
export default function ManajemenPakar(props){
    return (
        <>
            <SidebarAdmin>
                 <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Pakar</h1>
                 <TablePakar
                    datas={props.pakars}
                    route_for_show={''}
                    route_for_edit={'admin.pakar.edit'}
                    route_for_update={'admin.pakar.update'}
                    route_for_delete={'admin.pakar.destroy'}
                 />
            </SidebarAdmin>
        </>
    );
}
