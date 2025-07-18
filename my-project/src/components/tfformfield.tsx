import TextInput from "./textInput";  
import type { applicationInputs } from "./app_form";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { FieldPath } from "react-hook-form";
import { UseFormGetValues } from "react-hook-form";

type TFControllerProps = {
name: FieldPath<applicationInputs>;
    control: Control<applicationInputs>;
    label?: string;
    required?: boolean;
    isDatePicker?: boolean;
    getValue: UseFormGetValues<applicationInputs>
    position: FieldPath<applicationInputs>
}

const TFFormField:React.FC<TFControllerProps> =({  
    label         = "",
    required      = true,
    isDatePicker  = false,
    control,
    name,
    getValue,
    position
}) =>{
    return(
        <Controller
            name={name}
            control={control}
            render = {({field, fieldState:{error}}) =>(
            <div className="flex flex-col space-y-2">
                {error ? <p className="text-red-700 text-sm text-bold">{error.message}</p> : <p></p>}
                <TextInput label={label} required={required} isDatePicker={isDatePicker} {...field} disabled={getValue(position)==""}/>
            </div>
          )}
        ></Controller>
    );
}
export default TFFormField;