import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    // Atur judul form dan ilustrasi sesuai route, antara Login/Register
    const form_title = route().current("login") ? "Login" : "Sign Up";
    const form_image = route().current("login") ? "img/ilustrasi_login.png" : "img/ilustrasi_register.png";

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <div className="w-full sm:max-w-md m-auto px-12 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className="font-poppins">
                    <Link href={route('home')}>
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                    <img className="w-1/2 mx-auto my-5" src={form_image} />
                    <h2 className="font-bold text-2xl text-center">{form_title}</h2>
                </div>
                {children}
            </div>
        </div>
    );
}
