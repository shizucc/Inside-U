import * as React from 'react';
import { Head } from '@inertiajs/react';
import Judul from './Partials/Judul';
import IndexGrid from './Partials/IndexGrid';
import KotakSmall from './Partials/KotakSmall';
import GrafikBulanan from './Partials/GrafikBulanan';
import IconUser from './Partials/IconUser';
import IconDiagnosa from './Partials/IconDiagnosa';

export default function AdminIndex(props) {
    const users = props.users;
    const banyakUser = users.length;
    let banyakDiagnosa = 0;
    users
        .filter(user => user.kepribadians.length != 0)
        .forEach(user => banyakDiagnosa += user.kepribadians.length/4);

    const userBulanan = props.monthly_users.map(bulan => bulan.total);
    return(
        <>
            <Head>
                <title>Dashboard Admin</title>
                <style>{'body { background-color: #F2EDEE; }'}</style>
            </Head>

            <Judul>Hai, selamat datang!</Judul>

            <IndexGrid
                kotak1={<KotakSmall icon={<IconUser />} number={banyakUser} text="Total User" />}
                kotak2={<GrafikBulanan data={userBulanan} judul="Jumlah User Baru per Bulan (2023)" label="Jumlah User Baru" />}
                kotak3="3"
                kotak4={<KotakSmall icon={<IconDiagnosa />} number={banyakDiagnosa} text="Total Diagnosa" />}
                kotak5="5"
            />

        </>
    )
}
