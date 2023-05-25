import { Link } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import RandomColor from 'randomcolor';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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

function Found(props) {
    let data_count = props.data_diagnosa.length;
    let labels = Array();
    let persentase = Array();
    let colors = Array();
    let list_items = Array();
    for (let i = 0; i < data_count; i++) {
        let tmp = props.data_diagnosa[i].jenis_kepribadian;
        let jenis_kepribadian = tmp.charAt(0).toUpperCase() + tmp.slice(1); // Kapital huruf pertama
        labels.push(jenis_kepribadian);
        persentase.push(props.data_diagnosa[i].persentase);
        colors.push(RandomColor({luminosity: 'bright', hue: 'random', format: 'rgba', alpha: 0.7, seed: i*1000}));
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        size: 20,
                    },
                },
            },
        },
    };

    const data = {
    labels: labels,
    datasets: [
        {
        label: 'Persentase',
        data: persentase,
        backgroundColor: colors,
        },
    ],
    };

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
            <h1 className="text-center font-bold my-3 text-3xl text-[#1A1919]">Hasil Diagnosa</h1>
            <div className="mx-auto w-50 h-96 p-10">
                <Pie data={data} options={options} />
            </div>
        </div>
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
                <Found data_diagnosa={props.data_diagnosa} />
                )
            }
        </Navbar>
        </>
    );
}
