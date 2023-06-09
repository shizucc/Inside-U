import { Head } from '@inertiajs/react';

export default function ManajemenKepribadian(props){
    return(
        <>
        <Head>
            <title>Manajemen Kepribadian</title>
        </Head>
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