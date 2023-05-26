import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import React from 'react';
import GrafikHasil from '@/Pages/Diagnosa/Partials/GrafikHasil.jsx';

function NotFound() {
    return(
        <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[24px] font-poppins">
            <Link href={route('home')} as="button">
                <span className="inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#98A8F8" className="flex w-5 h-5 my-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <p className="text-[#98A8F8] font-semibold text-lg hover:underline" href="#">Kembali</p>
                </span>
            </Link>
            <h1 className="text-center font-bold my-3 text-2xl text-red-500">Data tidak ditemukan!</h1>
        </div>
    );
}

function IlustrasiLeft(props) {
    return(
        <>
        <div className="col-span-1">
            <img src={props.ilustrasi} />
        </div>
        <div className="col-span-2 mt-10">
            <h2 className="text-black text-3xl font-semibold mb-4">{props.jenis_kepribadian}</h2>
            <p className="text-[rgba(0,0,0,0.6)] text-justify pr-20">{props.deskripsi}</p>
        </div>
        </>
    );
}

function IlustrasiRight(props) {
    return(
        <>
        <div className="col-span-2 mt-10">
            <h2 className="text-black text-3xl font-semibold mb-4">{props.jenis_kepribadian}</h2>
            <p className="text-[rgba(0,0,0,0.6)] text-justify pr-20">{props.deskripsi}</p>
        </div>
        <div className="col-span-1">
            <img src={props.ilustrasi} />
        </div>
        </>
    );
}

function Found(props) {
    let list_deskripsi = Array();
    for (let i = 0; i < props.data_diagnosa.length; i++) {
        let jenis_kepribadian = props.data_diagnosa_ordered[i].jenis_kepribadian;
        let deskripsi = props.data_diagnosa_ordered[i].deskripsi;
        let ilustrasi = props.data_diagnosa_ordered[i].ilustrasi;

        // Apabila i genap, ilustrasi berada di kiri, else kanan
        if (i % 2 == 0) {
            list_deskripsi.push(<IlustrasiLeft jenis_kepribadian={jenis_kepribadian} deskripsi={deskripsi} ilustrasi={ilustrasi} />);
        } else {
            list_deskripsi.push(<IlustrasiRight jenis_kepribadian={jenis_kepribadian} deskripsi={deskripsi} ilustrasi={ilustrasi} />);
        }
    }

    return(
        <>
        <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[24px] font-poppins">
            <Link href={route('home')} as="button">
                <span className="inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#98A8F8" className="flex w-5 h-5 my-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <p className="text-[#98A8F8] font-semibold text-lg hover:underline" href="#">Kembali</p>
                </span>
            </Link>
            <h1 className="text-center font-bold my-3 text-3xl text-[#1A1919]">Hasil Diagnosa</h1>
            <div className="mx-auto w-50 h-96 p-10">
                <GrafikHasil data_diagnosa={props.data_diagnosa} />
            </div>
        </div>
        <div className="w-full h-fit bg-white p-20 font-poppins">
            <div className="grid grid-cols-3 gap-4">
                {list_deskripsi}
            </div>
        </div>
        </>
    );
}


export default function Hasil(props) {
    return(
        <>
        <Navbar user={props.auth.user}>
            { props.data_diagnosa.length == 0 ? (
                // Data tidak ditemukan
                <NotFound />
                ) : (
                // Data ditemukan
                <Found data_diagnosa={props.data_diagnosa} data_diagnosa_ordered={props.data_diagnosa_ordered} />
                )
            }
        </Navbar>
        </>
    );
}
