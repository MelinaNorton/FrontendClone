import TextInput from "./textInput";  
import type { applicationInputs } from "./app_form";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { FieldPath } from "react-hook-form";
type TFControllerProps = {
    name: FieldPath<applicationInputs>,
    fname?: string,
    surname?: string,
    required?: boolean,
    onChange?: (newval:string)=>void,
    control: Control<applicationInputs>,
    birthday?: string
    isDatePicker?: boolean,
    idnum?: string,
    residence?: string,
    phonenum?: string,
    email?: string,
    label?: string
}

const TFFormField:React.FC<TFControllerProps> =({
    fname         = "",
    surname       = "",  
    label         = "",
    required      = true,
    birthday      = "",
    isDatePicker  = false,
    idnum         = "",
    residence     = "",
    phonenum      = "",
    email         = "",
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
                <TextInput label={label} required={required} isDatePicker={isDatePicker} onChange={field.onChange}/>
            </div>
          )}
        ></Controller>
    );
}
export default TFFormField;