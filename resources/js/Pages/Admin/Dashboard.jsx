import * as React from 'react';
import { Head } from '@inertiajs/react';
import Judul from '@/Pages/Admin/Partials/Judul';
import IndexGrid from '@/Pages/Admin/Partials/IndexGrid';
import KotakSmall from '@/Pages/Admin/Partials/KotakSmall';
import GrafikBulanan from '@/Pages/Admin/Partials/GrafikBulanan';
import GrafikKepribadian from '@/Pages/Admin/Partials/GrafikKepribadian';
import IconUser from '@/Pages/Admin/Partials/IconUser';
import IconDiagnosa from '@/Pages/Admin/Partials/IconDiagnosa';

export default function AdminDashboard(props) {
    return(
        <>
            <Head>
                <title>Dashboard Admin</title>
                <style>{'body { background-color: #F2EDEE; }'}</style>
            </Head>

            <Judul>Hai, selamat datang!</Judul>

            <IndexGrid
                kotak1={<KotakSmall icon={<IconUser />} number={props.data.total_user} text="Total User" />}
                kotak2={<GrafikBulanan data={props.data.userbaru_bulanan} judul="Jumlah User Baru per Bulan (2023)" label="Jumlah User Baru" />}
                kotak3={<GrafikBulanan data={props.data.diagnosa_bulanan} judul="Jumlah Diagnosa per Bulan (2023)" label="Jumlah Diagnosa" />}
                kotak4={<KotakSmall icon={<IconDiagnosa />} number={props.data.total_diagnosa} text="Total Diagnosa" />}
                kotak5={<GrafikKepribadian data={props.data.kepribadians} judul="Rekaman Kepribadian Hasil Diagnosa" label="Jenis Kepribadian" />}
            />

        </>
    )
}
