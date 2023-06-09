import SidebarPakar from "./SidebarPakar"
import TableHistori from "./Partials/TableHistori"
import { Head } from '@inertiajs/react';


export default function HistoriDiagnosa(props){
    let historis = props.historis;
    historis = historis.filter(histori => histori.kepribadians.length != 0);
    let kepribadians = [];

    historis ? historis.map(histori => {
        let n = histori.kepribadians.length/4;
        for (let i = 0; i < n; i++) {
            let tmp = histori.kepribadians.slice(0+(i*4), 4+(i*4));
            let max_kepribadian = tmp.reduce(
                (prev, curr) => prev.pivot.persentase > curr.pivot.persentase ? prev : curr);
            max_kepribadian["nama"] = histori.username;
            kepribadians.push(max_kepribadian);
        }
    }) : null

    const col = kepribadians.map((kepribadian)=> ({
        user_id:kepribadian.pivot.user_id,
        diagnosa_id:kepribadian.pivot.diagnosa_id,
        nama:kepribadian.nama,
        waktu_diagnosa:kepribadian.pivot.waktu_diagnosa,
        hasil:kepribadian.jenis_kepribadian
        
    }))


    return(
        <>
        <SidebarPakar username={props.auth.user.username}>
            <Head>
                <title>Histori Diagnosa</title>
            </Head>
            <TableHistori
                datas={col}
                route_for_show={"diagnosa.hasil"}
            />
        </SidebarPakar>
        </>
    )
}
