import OpenPosition from "./openPositions";
import type { applicationInputs } from "./app_form";
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form";
import { FieldPath } from "react-hook-form";
import { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

type OPControllerProps = {
    control: Control<applicationInputs>;
    title?: string;
    required?: boolean;
    name: FieldPath<applicationInputs>;
    icon?: string;
    isSelected?: boolean;
    onClick: (title:string) => void
}

const OPFormField:React.FC<OPControllerProps> = ({
    title = "",
    required = true,
    icon = "⌄",
    isSelected = false,
    control,
    onClick,
    name
}) => {
    return(
        <Controller
            name={name}
            control={control}
            render = {({field}) =>(
            <div className="flex flex-col space-y-2">
                <OpenPosition title={title} icon="⌄" isSelected={isSelected} onClick={onClick}/>
            </div>
          )}
        ></Controller>
    );
}
export default OPFormField;
