import { Dispatch } from "react";
import { SetStateAction } from "react";

type openPosProps = {
    title : string,
    icon : string,
    isSelected : boolean,
    onClick : (title:string)=>void
}

const OpenPosition:React.FC<openPosProps> = (props:openPosProps) => {
    const blank = "";

    return(
        <div className="group w-full">
            <div className="bg-gray-300/20 w-full lg:w-95 h-15 flex flex-row justify-end items-center rounded-lg group-hover:bg-gray-400/80 p-4 group-hover:cursor-pointer" onClick={()=>props.onClick(props.title)}>
                <div className="flex flex-row justify-between w-full h-full">
                    <p className="text-md text-white tracking-wider">{props.title}</p>
                    {props.isSelected ? (<p className="text-xl color-white">✔</p>) : (<p className="text-xl color-white"></p>)}
                </div>  
            </div>
        </div>
    );
}
export default OpenPosition;