'use client'
import { useState } from "react";

type dropdownProps = {
    label : string,
    dd_icon : string,
    dd_icon_up : string,
    dd_num : number,
    dd_text : string[],
    dd_icons : string[],
    hidden :boolean,
    button_icon : string
}

const DropdownMenu:React.FC<dropdownProps> = (props : dropdownProps) => {
    const [isHidden, setIsHidden] = useState(props.hidden);
    const [choice, setChoice] = useState(props.button_icon)
    const [choiceIcon, setChoiceIcon] = useState("")
    const [focused, setFocused] = useState(false)
    
    const setChoiceData = (choiceText:string, choiceIcon:string) =>{
        setChoice(choiceText);
        setChoiceIcon(choiceIcon);
        setFocused(false)
    }
    return(
        <div className="flex flex-col 2xl:w-110 lg:w-95 w-full" onClick={()=> setIsHidden(!isHidden)}>
            <div className="relative">
                <h1 className="text-lg text-white">{props.label}</h1>
                <div className="bg-gray-300/20 2xl:w-110 lg:w-95 w-full h-15 flex flex-row justify-between items-center rounded-md hover:bg-gray-400/40 p-1 hover:cursor-pointer" onClick={()=>setFocused(!focused)}>
                    <div className="flex flex-row justify-start items-center space-x-5">
                        {choiceIcon !="" ? <img src={"/resources/" + choiceIcon} className="h-5"></img> : <p></p>}
                        <p className="text-md color-white">{choice}</p>
                    </div>
                    <p className="text-xs color-white">{focused ? props.dd_icon_up : props.dd_icon}</p>
                </div>  
                    <div className={`absolute ${isHidden ? "h-auto" : " h-auto flex flex-col items-center justify-center w-full"} transition-transform duration-200 ${isHidden ? "scale-y-0 origin-top w-full" : "scale-y-100 origin-top border border-yellow-500"} z-20 rounded-t-lg rounded-b-lg`}>
                        {props.dd_text.map((textcontent, i, key) =>(
                            <div className={`bg-white hover:bg-gray-200 flex flex-row w-full ${i==0 ? "rounded-t-lg" : ""} ${i==props.dd_num-1 ? "rounded-b-lg" : ""}`} key={i}>
                                {props.dd_icons[i]!='' ? <img src={"/resources/"+props.dd_icons[i]} className="h-5"></img> : <p></p>}
                                <button className={`text-black w-full flex flex-col justify-center items-start hover:cursor-pointer p-1`} key={i} onClick={()=> setChoiceData(textcontent, props.dd_icons[i])}>{textcontent}</button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default DropdownMenu;
