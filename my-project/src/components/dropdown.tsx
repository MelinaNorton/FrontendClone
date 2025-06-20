'use client'
import { useState } from "react";

type dropdownProps = {
    label : string,
    dd_icon : string,
    dd_num : number,
    dd_text : string[],
    dd_icons : string[],
    hidden :boolean,
}

const DropdownMenu:React.FC<dropdownProps> = (props : dropdownProps) => {
    const [isHidden, setIsHidden] = useState(props.hidden);
    return(
        <div className="flex flex-col " onClick={()=> setIsHidden(!isHidden)}>
            <div className="relative border border-blue-500">
                <h1 className="text-lg text-white">{props.label}</h1>
                <div className="bg-slate-700 w-90 h-10 flex flex-row justify-end items-center rounded-xs hover:bg-gray-400 p-1 hover:cursor-pointer">
                    <p className="text-xs color-white">{props.dd_icon}</p>
                </div>  
                    <div className={`absolute ${isHidden ? "h-auto" : " h-auto flex flex-col items-center justify-center w-full"} transition-transform duration-200 ${isHidden ? "scale-y-0 origin-top w-full" : "scale-y-100 origin-top"}`}>
                        {props.dd_text.map((textcontent, i) =>(
                            <div className="bg-white w-full flex flex-col justify-center items-start hover:bg-gray-200 hover:cursor-pointer p-1">
                                <div className="flex flex-row w-full space-x-2">
                                    {props.dd_icons[i]!='' ? <img src={"/resources/" + props.dd_icons[i]} className="h-5"></img>: <p></p>}
                                    <p className="text-black text-md h-5 font-sans">{textcontent}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default DropdownMenu;
