export default function KotakSmall(props) {
    return(
        <div className="p-5 my-5 text-center">
            <div className="flex box-content w-24 h-24 bg-blue-300 mx-auto rounded-full shadow-[inset_-10px_-10px_25px_5px_rgba(0,0,0,0.25)]">
                {props.icon}
            </div>
            <h2 className="font-medium text-3xl my-2">{props.number}</h2>
            <h2 className="font-thin text-2xl my-2">{props.text}</h2>
        </div>
    )
}
