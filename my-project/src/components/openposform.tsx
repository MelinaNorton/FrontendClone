import OpenPosition from "./openPositions";
import type { applicationInputs } from "./app_form";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { FieldPath } from "react-hook-form";
import { UseFormSetValue } from "react-hook-form";
import { UseFormGetValues } from "react-hook-form";

type OPControllerProps = {
    control: Control<applicationInputs>;
    title?: string;
    required?: boolean;
    name: FieldPath<applicationInputs>;
    icon?: string;
    isSelected?: string;
    onClick: (title:string) => void;
    setValue: UseFormSetValue<applicationInputs>;
    getValue: UseFormGetValues<applicationInputs>
}

const OPFormField:React.FC<OPControllerProps> = ({
    title = "",
    required = true,
    icon = "⌄",
    isSelected = "",
    control,
    onClick,
    name,
    setValue,
    getValue
}) => {
    return(
        <Controller
            name={name}
            control={control}
            render = {({field}) =>(
            <div className="flex flex-col space-y-2">
                <OpenPosition title={title} icon="⌄" isSelected={isSelected} onClick={onClick} setValue={setValue} getValue={getValue} name={name}/>
            </div>
          )}
        ></Controller>
    );
}
export default OPFormField;
