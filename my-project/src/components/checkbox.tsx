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
            className=" h-5 w-5"
            checked={props.checked}
            onChange = {e => props.onChange(e.target.checked)}
            ></input>
        </div>
    );
}
export default CheckBox;