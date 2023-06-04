import SidebarPakar from "./SidebarPakar"
import TableHistori from "./Partials/TableHistori"



export default function HistoriDiagnosa(props){
    let historis = props.historis;
    historis = historis.filter(histori => histori.kepribadians.length != 0);
    console.log(historis)




    return(
        <>
        {historis ? historis.map(histori => {
            let n = histori.kepribadians.length/4;
            let kepribadians = [];
            for (let i = 0; i < n; i++) {
                let tmp = histori.kepribadians.slice(0+(i*4), 4+(i*4));
                let max_kepribadian = tmp.reduce(
                    (prev, curr) => prev.pivot.persentase > curr.pivot.persentase ? prev : curr);
                max_kepribadian["nama"] = histori.username;
                kepribadians.push(max_kepribadian);
            }
            return(
            <>
                {kepribadians.map(kepribadian => {
                    console.log(kepribadian);
                    return(
                        <>
                            <h1>Nama: {kepribadian.nama}</h1>
                            <p>Waktu diagnosa: {kepribadian.pivot.waktu_diagnosa}</p>
                            <p>Hasil: {kepribadian.jenis_kepribadian}</p>
                        </>
                    )
                })}
            </>
            )
        }) : null
    }
        </>
    )
}
