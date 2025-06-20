type openPosProps = {
    title : string,
    icon : string,
    isSelected : boolean,
    onClick : () => void
}

const OpenPosition:React.FC<openPosProps> = (props:openPosProps) => {
    const blank = "";

    return(
        <div className="group">
            <div className="bg-gray-300/20 w-90 h-15 flex flex-row justify-end items-center rounded-lg group-hover:bg-gray-400/80 p-4 group-hover:cursor-pointer" onClick={props.onClick}>
                <div className="flex flex-row justify-between w-full h-full">
                    <p className="text-md color-white tracking-wider">{props.title}</p>
                    {props.isSelected ? (<p className="text-xl color-white">✔</p>) : (<p className="text-xl color-white"></p>)}
                </div>  
            </div>
        </div>
    );
}
export default OpenPosition;