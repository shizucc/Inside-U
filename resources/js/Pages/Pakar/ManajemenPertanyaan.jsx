export default function ManajemenPertanyaan(props){
    console.log(props)
    return(
        <>
        <h1>Hello World</h1>
        {props.pertanyaans ? props.pertanyaans.map(pertanyaan => {
            return(
                <div key={pertanyaan.id}>
                    <h1>{pertanyaan.pertanyaan}</h1>
                    <p>Ciri : {pertanyaan.ciri.ciri}</p>
                </div>
            )
        }) : null
    }
        </>
    )
}