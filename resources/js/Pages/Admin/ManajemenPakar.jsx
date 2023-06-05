import SidebarAdmin from "./Sidebar";
import TablePakar from "./Partials/TablePakar"
import {Button} from "@mui/material"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
export default function ManajemenPakar(props){
    return (
        <>
            <SidebarAdmin>
                 <h1 className="mb-5 font-poppins font-medium text-4xl">Manajemen Pakar</h1>
                 <Button variant='contained' className="my-24 bg-[#98A8F8]" href={route('admin.pakar.create')} ><AddRoundedIcon/><span className="font-poppins font-medium"> Tambah Akun Pakar</span></Button>
                 <TablePakar
                    datas={props.pakars}
                    route_for_edit={'admin.pakar.edit'}
                    route_for_update={'admin.pakar.update'}
                    route_for_delete={'admin.pakar.destroy'}
                 />
            </SidebarAdmin>
        </>
    );
}
