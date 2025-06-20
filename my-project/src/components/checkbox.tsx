import { useState } from "react";

type checkProps = {
    label : string
}

const CheckBox:React.FC<checkProps> = (props:checkProps) =>{
    const [checked, setChecked] = useState(false);
    return(
        <div className="flex flex-row items-center justify-start">
            <p className="text-white text-md tracking-wider">{props.label}</p>
            <input type="checkbox" 
            className="bg-gray-400 h-5 w-5"
            checked={checked}
            onChange={()=>setChecked(!checked)}
            ></input>
        </div>
    );
}
export default CheckBox;