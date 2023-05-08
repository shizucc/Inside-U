export default function Manfaat(props){
    return (
        <div className="text-center w-40 py-8">
            <div className="h-40 my-auto">
                <img src={props.gambar} alt="" className="mx-auto w-40 "/>
            </div>
            <div>
                <h1 className="text-poppins">{props.deskripsi}</h1>
            </div>
            
        </div>
    );
}