
import DropdownMenu from "./dropdown";  
import type { applicationInputs } from "./app_form";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { FieldPath } from "react-hook-form";
import { UseFormGetValues } from "react-hook-form";
import { dependent_inputs } from "./app_form";

type DDControllerProps = {
    name: FieldPath<applicationInputs>
    control: Control<applicationInputs>
    label?: string
    dd_icon?: string
    dd_icon_up?: string
    dd_num?: number
    dd_text?: string[]
    dd_icons?: string[]
    hidden?: boolean
    button_icon?: string
    required?: boolean
    getValue: UseFormGetValues<applicationInputs>
    position: FieldPath<applicationInputs>
    dependent_input: string
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
    control,
    name,
    position,
    dependent_input,
    getValue
}) =>{
    return(
        <Controller
            name={name}
            control={control}
            render = {({field, fieldState:{error}}) =>(
            <div className="flex flex-col space-y-2">
                {error ? <p className="text-red-700 text-sm text-bold">{error.message}</p> : <p></p>}
                <DropdownMenu value={typeof field.value === "string" ? field.value : ""} label={label} dd_icon={dd_icon} dd_icon_up={dd_icon_up} dd_num={dd_num} dd_text={dd_text} hidden={hidden} dd_icons={dd_icons} button_icon={button_icon} required={required} onChange={field.onChange} disabled={getValue(position)=='' && dependent_inputs.includes(dependent_input)}/>
            </div>
          )}
        ></Controller>
    );
}
export default DDFormField;