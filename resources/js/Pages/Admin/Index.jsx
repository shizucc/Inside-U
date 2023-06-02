import * as React from 'react';
import { Head } from '@inertiajs/react';
import Judul from '@/Pages/Admin/Partials/Judul';
import IndexGrid from '@/Pages/Admin/Partials/IndexGrid';
import KotakSmall from '@/Pages/Admin/Partials/KotakSmall';
import GrafikBulanan from '@/Pages/Admin/Partials/GrafikBulanan';
import GrafikKepribadian from '@/Pages/Admin/Partials/GrafikKepribadian';
import IconUser from '@/Pages/Admin/Partials/IconUser';
import IconDiagnosa from '@/Pages/Admin/Partials/IconDiagnosa';
import SidebarAdmin from './Sidebar';

export default function AdminDashboard(props) {
    return (
        <>
        <SidebarAdmin username={props.auth.user.username}>
            <Head>
                <title>Dashboard Admin</title>
                <style>{'body { background-color: #FEF8F8; }'}</style>
            </Head>

            <Judul>Hai, selamat datang!</Judul>

            <IndexGrid
                kotak1={<KotakSmall icon={<IconUser />} number={props.total_user} text="Total User" />}
                kotak2={<GrafikBulanan data={props.userbaru_bulanan} judul="Jumlah User Baru per Bulan (2023)" label="Jumlah User Baru" />}
                kotak3={<GrafikBulanan data={props.diagnosa_bulanan} judul="Jumlah Diagnosa per Bulan (2023)" label="Jumlah Diagnosa" />}
                kotak4={<KotakSmall icon={<IconDiagnosa />} number={props.total_diagnosa} text="Total Diagnosa" />}
                kotak5={<GrafikKepribadian data={props.kepribadians} judul="Rekaman Kepribadian Hasil Diagnosa" label="Jenis Kepribadian" />}
            />
        </SidebarAdmin>
        </>
    );
}
