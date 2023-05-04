export default function ManajemenCiriCiri(props){
    console.log(props)
    return(
        <>
        <h1>Hello World</h1>
        {props.ciri_ciris ? props.ciri_ciris.map(ciri_ciri => {
            return(
                <div key={ciri_ciri.id}>
                    <h2>Ciri : {ciri_ciri.ciri}</h2>
                    <p>Jenis kepribadian : {ciri_ciri.kepribadian_id.jenis_kepribadian}</p>
                </div>
            )
        }) : null
    }
        </>
    )
}