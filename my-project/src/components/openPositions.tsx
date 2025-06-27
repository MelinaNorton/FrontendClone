import { applicationInputs } from "./app_form";
import { UseFormSetValue } from "react-hook-form";
import { UseFormGetValues } from "react-hook-form";
import { useState } from "react";
import { Path } from "react-hook-form";
type openPosProps = {
    title : string,
    icon : string,
    isSelected : string,
    onClick : (title:string)=>void,
    setValue : UseFormSetValue<applicationInputs>
    getValue : UseFormGetValues<applicationInputs>
    name : Path<applicationInputs>
}

const OpenPosition:React.FC<openPosProps> = (props:openPosProps) => {
    const blank = "";
    const [toggleSelected, setToggleSelected] = useState(false)

    const selectPosition = (pos:string) =>{
        props.setValue("position", props.title);
        props.onClick(props.title)
    }
    return(
        <div className="group w-full">
            <div className="bg-gray-300/20 w-full lg:w-95 h-15 flex flex-row justify-end items-center rounded-lg group-hover:bg-gray-400/80 p-4 group-hover:cursor-pointer" onClick={()=>selectPosition(props.title)}>
                <div className="flex flex-row justify-between w-full h-full">
                    <p className="text-md text-white tracking-wider">{props.title}</p>
                    {props.getValue(props.name)==props.title ? (<p className="text-xl color-white">✔</p>) : (<p className="text-xl color-white"></p>)}
                </div>  
            </div>
        </div>
    );
}
export default OpenPosition;