type openPosProps = {
    title : string,
    icon : string,
    isSelected : boolean,
    onClick : () => void
}

const OpenPosition:React.FC<openPosProps> = (props:openPosProps) => {
    return(
        <div className="group">
            <div className="bg-gray-300/20 w-80 h-10 flex flex-row justify-end items-center rounded-xs group-hover:bg-gray-400/80 p-2 group-hover:cursor-pointer" onClick={props.onClick}>
                <div className="flex flex-row justify-between w-full">
                    <p className="text-md color-white tracking-wider">{props.title}</p>
                    {props.isSelected ? (<p className="text-md color-white">✔</p>) : (<p></p>)}
                </div>  
            </div>
        </div>
    );
}
export default OpenPosition;