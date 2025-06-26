
import DropdownMenu, { dropdownProps } from "./dropdown";  
import type { applicationInputs } from "./app_form";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { FieldPath } from "react-hook-form";
type DDControllerProps = {
    label?: string,
    dd_icon?: string,
    dd_icon_up?: string,
    dd_num?: number,
    dd_text?: string[],
    dd_icons?: string[],
    hidden?:boolean,
    button_icon?: string,
    required?: boolean,
    onChange?: (newval:string)=>void,
    control: Control<applicationInputs>,
    name: FieldPath<applicationInputs>
}

const DDFormField:React.FC<DDControllerProps> =({
    label        = "",
    dd_icon       = "▼",
    dd_icon_up    = "▲",
    dd_num        = 0,
    dd_text       = [],
    dd_icons      = ['', '', '', '', '', ''],
    hidden        = true,
    button_icon   = "",
    required      = true,
    onChange,
    control,
    name
}) =>{
    return(
        <Controller
            name={name}
            control={control}
            render = {({field}) =>(
            <div className="flex flex-col space-y-2">
                <DropdownMenu label={label} dd_icon={dd_icon} dd_icon_up={dd_icon_up} dd_num={dd_num} dd_text={dd_text} hidden={hidden} dd_icons={dd_icons} button_icon={button_icon} required={required} onChange={field.onChange}/>
            </div>
          )}
        ></Controller>
    );
}
export default DDFormField;