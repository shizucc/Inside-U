import * as React from 'react';
import { Head } from '@inertiajs/react';
import Judul from './Partials/Judul';
import IndexGrid from './Partials/IndexGrid';
import KotakSmall from './Partials/KotakSmall';
import GrafikBulanan from './Partials/GrafikBulanan';
import GrafikKepribadian from './Partials/GrafikKepribadian';
import IconUser from './Partials/IconUser';
import IconDiagnosa from './Partials/IconDiagnosa';

export default function AdminIndex(props) {
    console.log(props.userbaru_bulanan);
    return(
        <>
            <Head>
                <title>Dashboard Admin</title>
                <style>{'body { background-color: #F2EDEE; }'}</style>
            </Head>

            <Judul>Hai, selamat datang!</Judul>

            <IndexGrid
                kotak1={<KotakSmall icon={<IconUser />} number={props.total_user} text="Total User" />}
                kotak2={<GrafikBulanan data={props.userbaru_bulanan} judul="Jumlah User Baru per Bulan (2023)" label="Jumlah User Baru" />}
                kotak3={<GrafikBulanan data={props.diagnosa_bulanan} judul="Jumlah Diagnosa per Bulan (2023)" label="Jumlah Diagnosa" />}
                kotak4={<KotakSmall icon={<IconDiagnosa />} number={props.total_diagnosa} text="Total Diagnosa" />}
                kotak5={<GrafikKepribadian data={props.kepribadians} judul="Rekaman Kepribadian Hasil Diagnosa" label="Jenis Kepribadian" />}
            />

        </>
    )
}
