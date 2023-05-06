export default function HistoriDiagnosa(props){
    let historis = props.historis;
    historis = historis.filter(histori => histori.kepribadians.length != 0);
    console.log(historis);
    function hello() {
        <h2>Cek</h2>
    }
    return(
        <>
        <h1>Hello World</h1>
        {historis ? historis.map(histori => {
            let n = histori.kepribadians.length/4;
            let kepribadians = [];
            for (let i = 0; i < n; i++) {
                let tmp = histori.kepribadians.slice(0+(i*4), 4+(i*4));
                let max_kepribadian = histori.reduce((previous, current) => {
                    current.kepribadians.pivot.persentase > previous.kepribadians.pivot.persentase
                    ? current : previous });
                kepribadians.push(max_kepribadian);
            }
        }) : null
    }
        </>
    )
}
