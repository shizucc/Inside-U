import SidebarAdmin from "./Sidebar";
import { Head } from '@inertiajs/react';

export default function ManajemenPakar(props){
    return (
        <>
            <SidebarAdmin username={props.auth.user.username}>
                <Head>
                    <title>Histori Diagnosa</title>
                </Head>
                Histori Diagnosa
            </SidebarAdmin>
        </>
    );
}
