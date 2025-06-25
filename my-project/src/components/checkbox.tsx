import { useState } from "react";

type checkProps = {
    label : string,
    onChange : (newval:boolean)=>void,
    checked : boolean
}

const CheckBox:React.FC<checkProps> = (props:checkProps) =>{
    return(
        <div className="flex flex-row items-center justify-start">
            <p className="text-white text-md tracking-wider">{props.label}</p>
            <input type="checkbox" 
            className="bg-gray-400 h-5 w-5"
            checked={props.checked}
            onChange = {(val) => props.onChange(!props.checked)}
            ></input>
        </div>
    );
}
export default CheckBox;