export default function HistoriDiagnosa(props){
    let historis = props.historis;
    historis = historis.filter(histori => histori.kepribadians.length != 0);
    function hello() {
        <h2>Cek</h2>
    }
    return(
        <>
        {historis ? historis.map(histori => {
            let n = histori.kepribadians.length/4;
            let kepribadians = [];
            for (let i = 0; i < n; i++) {
                let tmp = histori.kepribadians.slice(0+(i*4), 4+(i*4));
                let max_kepribadian = tmp.reduce(
                    (prev, curr) => prev.pivot.persentase > curr.pivot.persentase ? prev : curr);
                kepribadians.push(max_kepribadian);
            }
            return(
            <>
                {kepribadians.map(kepribadian => {
                    console.log(kepribadian);
                    return(
                        <>
                            <h1>Nama: {histori.username}</h1>
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
