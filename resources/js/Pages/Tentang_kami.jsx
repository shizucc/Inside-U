import Navbar from "@/Components/Navbar";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Tentang_kami(){
    return (
        <>
            <Navbar>
                <h1 className="font-poppins font-bold text-3xl text-center my-10">Anggota Tim</h1>
                <div className="container h-[200px] mx-auto w-5/6">
                    <div className="grid grid-cols-3 gap-4 static">
                        <div className="ml-[60px] absolute"><img src="img/yudith.png" className="w-[229px] h-auto" alt="yudith" /></div>
                        <div className="ml-[420px] absolute"><img src="img/alfi.png" className="w-[247px] h-auto" alt="alfi" /></div>
                        <div className="ml-[779px] absolute"><img src="img/alvin.png" className="w-[235px] h-auto" alt="alvin" /></div>
                    </div>
                    <div className="mt-16 mx-auto h-[150px] w-full bg-[#98A8F8] rounded-lg">
                    </div>
                </div>
                <div className="container h-20 mx-auto">
                    <div className="mx-auto mt-10 grid grid-cols-3 gap-4 w-5/6">
                        <div className="my-2 mx-auto font-bold font-poppins">
                            Yudith Nico Priambodo <br />
                            <div className="mx-auto w-full">
                                <div className="grid grid-cols-2">
                                    <div className="mx-auto"><a href="https://www.instagram.com/yunic.io/" target="_blank"><InstagramIcon /></a></div>
                                    <div className="mx-auto"><a href="https://wa.me/6282314744505" target="_blank"><WhatsAppIcon /></a></div>
                                </div> 
                            </div>
                        </div>
                        <div className="my-2 mx-auto font-bold font-poppins">
                            Alfi Syifana Ghozwy <br />
                            <div className="mx-auto w-full">
                                <div className="grid grid-cols-2">
                                    <div className="mx-auto"><a href="https://www.instagram.com/aruuvii_/" target="_blank"><InstagramIcon /></a></div>
                                    <div className="mx-auto"><a href="https://wa.me/6281390404971" target="_blank"><WhatsAppIcon /></a></div>
                                </div> 
                            </div>
                        </div>
                        <div className="my-2 mx-auto font-bold font-poppins">
                            Alvin Aryanta Suwardono <br />
                            <div className="mx-auto w-full">
                                <div className="grid grid-cols-2">
                                    <div className="mx-auto"><a href="https://www.instagram.com/alvin.aryanta.s/" target="_blank"><InstagramIcon /></a></div>
                                    <div className="mx-auto"><a href="https://wa.me/6288289135067" target="_blank"><WhatsAppIcon /></a></div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </Navbar>
        </>
    );
}