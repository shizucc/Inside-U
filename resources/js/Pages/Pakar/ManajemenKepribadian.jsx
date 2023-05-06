export default function ManajemenKepribadian(props){
    console.log(props)
    return(
        <>
        <h1>Hello World</h1>
        {props.kepribadians ? props.kepribadians.map(kepribadian => {
            return(
                <div key={kepribadian.id}>
                    <h2>{kepribadian.jenis_kepribadian}</h2>
                    <p>{kepribadian.deskripsi}</p>
                </div>
            )
        }) : null
    }
        </>
    )
}