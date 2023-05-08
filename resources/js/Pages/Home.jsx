import Navbar from "@/Components/Navbar";

export default function Home(){
    return (
        <>
            <Navbar>
                <div className="my-20 mx-40 py-10 px-10 bg-[#FDFDFD] rounded-[24px]">
                    <div className="grid-cols-2">
                        <div>
                            <h1 className="font-poppins font-bold text-6xl text-[#263238]">Yuk Kenali Dirimu!</h1>
                        </div>
                        <div>
                            <img src="img/illustrasi_home.png" alt="illustrasi1" className="h-20"/>
                        </div>
                    </div>
                    
                </div>
            </Navbar>
        </>
    );
}
