// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import DeleteUserForm from './Partials/DeleteUserForm';
// import UpdatePasswordForm from './Partials/UpdatePasswordForm';
// import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import { Link } from '@mui/material';
import TabelHistori from "./Partials/TabelHistori"

export default function Histori(props) {
    return (
        <>
        <Navbar user={props.auth.user}>
            <Head>
                <title>Histori Diagnosa</title>
            </Head>
            <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[24px] font-poppins">
                    <Link href={route('home')} as="button">
                        <span className="inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#98A8F8" className="flex w-5 h-5 my-auto">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            <p className="text-[#98A8F8] font-semibold text-lg hover:underline" href="#">Kembali</p>
                        </span>
                    </Link>
                <h1 className="text-center font-bold my-3 text-3xl">Histori Diagnosa</h1>
                <TabelHistori
                datas={col}
                route_for_show={'profile.histori'}
            />
                
                
            </div>
        </Navbar>
        </>
    );
}
