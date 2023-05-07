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
    let userBulanan = Array(12).fill(0);
    let diagnosaBulanan = Array(12).fill(0);

    users.forEach(user => {
        let bulanDibuat = new Date(user.created_at).getMonth();
        userBulanan[bulanDibuat]++;
        if (user.kepribadians.length == 0) return;
        let n = user.kepribadians.length/4;
        for (let i = 0; i < n; i++) {
            let bulanDiagnosa = new Date(user.kepribadians[0+(i*4)].pivot.waktu_diagnosa).getMonth();
            console.log(bulanDiagnosa);
            diagnosaBulanan[bulanDiagnosa]++;
        }
        banyakDiagnosa += n;
    });

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
                kotak3={<GrafikBulanan data={diagnosaBulanan} judul="Jumlah Diagnosa per Bulan (2023)" label="Jumlah Diagnosa" />}
                kotak4={<KotakSmall icon={<IconDiagnosa />} number={banyakDiagnosa} text="Total Diagnosa" />}
                kotak5="5"
            />

        </>
    )
}
