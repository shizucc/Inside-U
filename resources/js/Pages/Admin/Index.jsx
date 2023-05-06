import * as React from 'react';
import { Head } from '@inertiajs/react';

export default function AdminIndex() {
    return(
        <>
            <Head>
                <style>{'body { background-color: #F2EDEE; }'}</style>
            </Head>

            <h1 className="font-semibold text-3xl m-20">Hai, selamat datang!</h1>
            <div className="container px-10 grid gap-10 grid-cols-3 mx-auto my-10">
                <div className="col-span-1 box-content w-full h-64 bg-blue-300 mx-auto rounded-3xl drop-shadow-2xl">
                    1
                </div>
                <div className="col-span-2 box-content w-full bg-white mx-auto rounded-3xl drop-shadow-2xl">
                    2
                </div>
                <div className="col-span-2 box-content w-full h-64 bg-white mx-auto rounded-3xl drop-shadow-2xl">
                    3
                </div>
                <div className="col-span-1 box-content w-full bg-blue-300 mx-auto rounded-3xl drop-shadow-2xl">
                    4
                </div>
                <div className="col-span-3 box-content w-full h-64 bg-white mx-auto rounded-3xl drop-shadow-2xl">
                    5
                </div>
            </div>
        </>
    )
}
