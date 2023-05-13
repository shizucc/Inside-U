export default function Pertanyaan(props) {
    const name = 'p' + props.nomor.toString();
    const id_yes = name + "-yes";
    const id_no = name + "-no";
    const margin_top = props.margin_top ? " mt-8 " : "";
    return(
        <>
        <h3 className={"mb-5 ml-2 text-lg font-medium" + margin_top}>{props.nomor + ". " + props.pertanyaan}</h3>
        <ul className="grid w-full gap-6 md:grid-cols-2">
            <li key={id_yes}>
                <input type="radio" id={id_yes} name={name} value={id_yes} className="hidden peer" onChange={props.onChange} defaultChecked={props.yes_checked} />
                <label htmlFor={id_yes} className="inline-flex items-center justify-between w-full h-10 p-5 text-[#5F93D0] bg-white border-4 border-[#5F93D0] rounded-2xl cursor-pointer peer-checked:bg-[#5F93D0] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                    <div className="w-full mx-auto text-lg text-center font-semibold">Ya</div>
                </label>
            </li>
            <li key={id_no}>
                <input type="radio" id={id_no} name={name} value={id_no} className="hidden peer" onChange={props.onChange} defaultChecked={props.no_checked} />
                <label htmlFor={id_no} className="inline-flex items-center justify-between w-full h-10 p-5 text-[#FF0000] bg-white border-4 border-[#FF0000] rounded-2xl cursor-pointer peer-checked:bg-[#FF0000] peer-checked:text-white hover:text-gray-600 hover:bg-gray-200">
                    <div className="w-full mx-auto text-lg text-center font-semibold">Tidak</div>
                </label>
            </li>
        </ul>
        </>
    );
}
