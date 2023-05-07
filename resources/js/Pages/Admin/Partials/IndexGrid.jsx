export default function IndexGrid(props) {
    return (
        <div className="container px-10 grid gap-10 grid-cols-3 mx-auto my-10">
            <div className="col-span-1 box-content w-full h-72 bg-blue-300 mx-auto rounded-3xl drop-shadow-xl hover:drop-shadow-2xl">
                {props.kotak1}
            </div>
            <div className="flex justify-center col-span-2 box-content w-full h-72 bg-white mx-auto rounded-3xl drop-shadow-xl hover:drop-shadow-2xl">
                {props.kotak2}
            </div>
            <div className="flex justify-center col-span-2 box-content w-full h-72 bg-white mx-auto rounded-3xl drop-shadow-xl hover:drop-shadow-2xl">
                {props.kotak3}
            </div>
            <div className="col-span-1 box-content w-full bg-blue-300 mx-auto rounded-3xl drop-shadow-xl hover:drop-shadow-2xl">
                {props.kotak4}
            </div>
            <div className="flex justify-center col-span-3 box-content w-full h-80 bg-white mx-auto rounded-3xl drop-shadow-xl hover:drop-shadow-2xl">
                {props.kotak5}
            </div>
        </div>
    )
}
