import SidebarAdmin from "./Sidebar"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import BasicSelect from "@/Components/BasicSelect";
import PasswordInput from "./Partials/PasswordInput";
import { Head } from '@inertiajs/react';

export default function TambahUser (props){
    const [username,setUsername] = useState(props.user? props.user.username : '')
    const [email,setEmail] = useState(props.user? props.user.email : '')
    const [role,setRole] = useState(props.signature? props.signature : null);
    const [password,setPassword] = useState('')
    

    const { data, setData, post,put, processing, errors, reset } = useForm({
        id:(props.user ? props.user.id : null),
        username: username,
        email: email,
        password: password,
        role: role,
    });


    const handleChangeRole = (value) => {
        setData('role', value)
        setRole(value);
    };

    const handleChangeUsername = (event) => {
        setData('username', event.target.value)
        setUsername(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setData('email', event.target.value)
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setData('password', event.target.value)
        setPassword(event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        if(props.user){
            put(route('admin.pakar.update',props.user))
        } else{

            post(route('admin.pakar.store'))
        }
    }
    return (
        <SidebarAdmin username={props.auth.user.username}>
            <Head>
                <title>Tambah User</title>
            </Head>
            <h1 className="text-3xl font-medium mb-16">Masukkan Data Akun</h1>
            <div className="container w-full shadow-lg flex rounded-lg">
                <div id="form" className="w-2/5 p-6 text-center">
                    <h1 className="text-2xl font-medium mb-8">Formulir Akun</h1>
                    <form onSubmit={submit}>
                        <input 
                            required
                            type="text" 
                            className="w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg mb-6" 
                            placeholder="Username" 
                            value={username}
                            onChange={handleChangeUsername}
                        />
                        <input 
                            required
                            type="email" 
                            className=" peer w-4/5 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 rounded-lg  mb-6" 
                            placeholder="Email"
                            value={email}
                            onChange={handleChangeEmail}
                        
                        />

                        <PasswordInput
                            required
                            value={password}
                            placeholder="Password"
                            onChange={handleChangePassword}
                        />
                        
                        <BasicSelect 
                            required
                            nama="Jenis Akun"
                            datas={props.roles}
                            value={role}
                            onChange={handleChangeRole}
                        />

                        <button type="submit" className="h-[40px] w-4/5 bg-[#98A8F8] text-white rounded-lg font-medium hover:bg-[#5D6AAD] focus:bg-[#5D6AAD]"><AddRoundedIcon/><span>Buat Akun</span></button>
                    </form>
                </div>
                <div id="bg" className="w-3/5 p-4 bg-[#88CCE1] rounded-r-lg">
                    <img src="/img/ilustrasi_form.png" alt="" className="w-8/12 m-auto" />
                </div>
            </div>
        </SidebarAdmin>
    )
}