export default function HistoriDiagnosa(props){
    console.log(props)
    return(
        <>
        <h1>Hello World</h1>
        {props.historis ? props.historis.map(histori => {
            return(
                <div key={histori.id}>
                    <h2>Username : {histori.username}</h2>
                    <h3>Waktu : {histori.waktu_diagnosa} </h3>
                </div>
            )
        }) : null
    }
        </>
    )
}
