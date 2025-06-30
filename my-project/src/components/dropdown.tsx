'use client'
import { useState, useEffect } from "react";

export type dropdownProps = {
    label : string,
    dd_icon : string,
    dd_icon_up : string,
    dd_num : number,
    dd_text : string[],
    dd_icons : string[],
    hidden :boolean,
    button_icon : string,
    required : boolean,
    onChange : (newval:string)=>void,
    value : string,
    disabled : boolean,
}

const DropdownMenu:React.FC<dropdownProps> = ({
    label,
    dd_icon,
    dd_icon_up, 
    dd_num, 
    dd_text, 
    dd_icons, 
    hidden,
    button_icon, 
    required, 
    onChange, 
    value, 
    disabled}
     : dropdownProps) => {
    const [isHidden, setIsHidden] = useState(hidden);
    const [choiceIcon, setChoiceIcon] = useState("")
    const [focused, setFocused] = useState(false)
    const startChoice = required? '' : ' '
    const [choice, setChoice] = useState(startChoice)

    useEffect(() => {
    if (value === "") {
      setChoice(startChoice);
      setChoiceIcon("");
      setFocused(false);
    }
    }, [value, startChoice]);

    const setChoiceData = (choiceText:string, choiceIcon:string) =>{
        setChoice(choiceText);
        onChange(choiceText);
        setChoiceIcon(choiceIcon);
        setFocused(false)
    }

    return(
        <div className="flex flex-col 2xl:w-110 lg:w-95 w-full" onClick={()=> setIsHidden(!isHidden)}>
            <div className="relative">
                {required && label!="" ? <h1 className="text-lg text-white">{label+ " *"}</h1> : <h1 className="text-lg text-white">{label}</h1>}
                <div className={`${disabled && label!=""? 'bg-gray-700/20': 'bg-gray-300/20 hover:bg-gray-400/40 hover:cursor-pointer'}  2xl:w-110 lg:w-95 w-full h-15 flex flex-row justify-between items-center rounded-md p-3`} onClick={()=>setFocused(!focused)}>
                    <div className="flex flex-row justify-start items-center space-x-5">
                        {choiceIcon !="" ? <img src={"/resources/" + choiceIcon} className="h-5"></img> : <p></p>}
                        <p className="text-md text-white">{value}</p>
                    </div>
                    {disabled && label!=""?  <p></p> : <p className="text-xs text-white">{focused ? dd_icon_up : dd_icon}</p>}
                </div>  
                    <div className={`absolute ${isHidden ? "h-auto" : " h-auto flex flex-col items-center justify-center w-full"} transition-transform duration-200 ${isHidden ? "scale-y-0 origin-top w-full" : "scale-y-100 origin-top border border-yellow-500"} z-20 rounded-t-lg rounded-b-lg`}>
                        {dd_text.map((textcontent, i, key) =>(
                            <div className={`bg-white hover:bg-gray-200 flex flex-row w-full ${i==0 ? "rounded-t-lg" : ""} ${i==dd_num-1 ? "rounded-b-lg" : ""}`} key={i}>
                                {dd_icons[i]!='' ? <img src={"/resources/"+dd_icons[i]} className="h-5"></img> : <p></p>}
                                <button type="button" disabled={disabled && label!=""} className={`text-black w-full flex flex-col justify-center items-start hover:cursor-pointer p-1`} key={i} onClick={()=> setChoiceData(textcontent, dd_icons[i])}>{textcontent}</button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default DropdownMenu;
