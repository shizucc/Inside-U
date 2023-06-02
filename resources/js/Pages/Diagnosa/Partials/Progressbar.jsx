import ProgressBar from "@ramonak/react-progress-bar";

export default function Progressbar(props) {
    return(
        <>
        <div className="grid grid-cols-2">
            <h3 className="text-left">Progress</h3>
            <h3 className="text-right">{parseInt(props.value)}%</h3>
        </div>
        <ProgressBar completed={props.value} baseBgColor="#D9D9D9" bgColor="#E5C727" height="11px" customLabel=" "/>
        </>
    );
}
