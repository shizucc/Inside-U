
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import TableHistori from "./Partials/TableHistori"

export default function Histori(props) {
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

    return (
        <>
        <Navbar user={props.auth.user}>
            <Head>
                <title>Histori Diagnosa</title>
            </Head>
            <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[24px] font-poppins">
                <h1 className="text-center font-bold my-3 text-3xl">Histori Diagnosa</h1>
                <TableHistori
                    datas={col}
                    route_for_show={"diagnosa.hasil"}
                />


            </div>
        </Navbar>
        </>
    );
}
