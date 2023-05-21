import Navbar from '@/Components/Navbar';

export default function Hasil(props) {
    console.log(props.data_diagnosa);
    return(
        <>
        <Navbar user={props.auth.user}>
            { props.data_diagnosa.length == 0 ? (
                <p>Data tidak ditemukan</p> ) : (
                <p>Data ditemukan</p> )
            }
        </Navbar>
        </>
    );
}
