export default function ControlButtons(props) {
    return(
        <div className="grid grid-cols-4 gap-2 mt-10">
            <button className="col-start-2 col-end-3 font-bold bg-[#98A8F8] text-[#F9F9F9] text-lg py-3 rounded-3xl transition ease-in-out duration-300 enabled:hover:bg-[#737EDE] enabled:hover:drop-shadow-lg disabled:bg-[#D0D0D0] disabled:text-[#808080]" disabled={props.prev_disabled} checked={true} onClick={props.handleClickPrev}>Sebelumnya</button>
            { props.show_submit ? (
                <button className="col-start-3 col-end-4 font-bold bg-[#98A8F8] text-[#F9F9F9] text-lg py-3 rounded-3xl transition ease-in-out duration-300 enabled:hover:bg-[#737EDE] enabled:hover:drop-shadow-lg disabled:bg-[#D0D0D0] disabled:text-[#808080]" disabled={!props.can_submit} onClick={props.handleSubmit}>Submit</button> ) : (
                <button className="col-start-3 col-end-4 font-bold bg-[#98A8F8] text-[#F9F9F9] text-lg py-3 rounded-3xl transition ease-in-out duration-300 enabled:hover:bg-[#737EDE] enabled:hover:drop-shadow-lg disabled:bg-[#D0D0D0] disabled:text-[#808080]" disabled={props.next_disabled} onClick={props.handleClickNext}>Selanjutnya</button> )
            }
        </div>
    );
}
