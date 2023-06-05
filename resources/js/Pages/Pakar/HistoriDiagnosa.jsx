import SidebarPakar from "./SidebarPakar"
import TableHistori from "./Partials/TableHistori"
import { Head } from '@inertiajs/react';


export default function HistoriDiagnosa(props){
    console.log(props.historis)
    let historis = props.historis;
    historis = historis.filter(histori => histori.kepribadians.length != 0);
    // console.log(historis)
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
        nama:kepribadian.nama,
        waktu_diagnosa:kepribadian.pivot.waktu_diagnosa,
        hasil:kepribadian.jenis_kepribadian
        
    }))
    // console.log(kepribadians)


    return(
        <>
        <SidebarPakar username={props.auth.user.username}>
            <Head>
                <title>Histori Diagnosa</title>
            </Head>
            <TableHistori
                datas={col}
                route_for_show={'pakar.histori.show'}
                route_for_edit={'pakar.kepribadian.edit'}
                route_for_update={'pakar.kepribadian.update'}
                route_for_delete={'pakar.kepribadian.destroy'}

            />
        </SidebarPakar>
        </>
    )
}
