 import type { applicationInputs } from "./app_form";
import { Controller, UseFormSetValue } from "react-hook-form";
import { Control } from "react-hook-form";
import { FieldPath } from "react-hook-form";
import { UseFormGetValues } from "react-hook-form";
import UploadButton from "./uploadDoc";

type UDControllerProps = {
    name: FieldPath<applicationInputs>;
    control: Control<applicationInputs>;
    label?: string;
    required?: boolean;
    getValue: UseFormGetValues<applicationInputs>
    position: FieldPath<applicationInputs>
    setValue: UseFormSetValue<applicationInputs>
    disabled : boolean;
    title : string;
    uploadIcon : string
    isSubmitted :boolean
}

const UDFormfield:React.FC<UDControllerProps> =({
    label = '',
    required = true,
    disabled = true,
    uploadIcon = "",
    isSubmitted = false,
    name,
    control,
    position,
    getValue,
    setValue,
    title,
})=>{
    return(
        <Controller
        name={name}
            control={control}
            render = {({field, fieldState:{error}}) =>(
            <div className="flex flex-col space-y-2">
                {error ? <p className="text-red-700 text-sm text-bold">{error.message}</p> : <p></p>}
                <UploadButton isSubmitted={isSubmitted} label={label} required={required} {...field} disabled={getValue(position)==""} title={title} upload_icon={uploadIcon} setValue={setValue}/>
            </div>
          )}
        ></Controller>
    );
}
export default UDFormfield