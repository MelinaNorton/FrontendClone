import { UseFormSetValue } from "react-hook-form";
import { applicationInputs } from "./app_form";
import { useState } from "react";

type uploadProps = {
    title : string,
    label: string,
    upload_icon : string,
    disabled : boolean,
    required : boolean,
    setValue : UseFormSetValue<applicationInputs>
}

const UploadButton:React.FC<uploadProps> = (props:uploadProps) => {
    const [localFile, setLocalFile] = useState("");

    const setFile =(file : File | undefined) =>{
        if(!file){
            console.log("no file selected")
        }
        else{
            setLocalFile(file.name)
            props.setValue("upload", file.name)
        }
    }
    return(
        <div className="group">
            <h1 className="text-white text-lg tracking-wider text-start">{props.required ? props.title+"*" : props.title}</h1>
            <div className="flex flex-row space-x-4">
                <div className={`relative bg-gray-300/20 md:w-55 w-35 h-20 rounded-md hover:bg-gray-400/40 p-2 flex flex-row items-center ${props.upload_icon==""? "justify-center" : "justify-start"}`}>
                    {props.upload_icon!="" ? <img src={"/resources/" + props.upload_icon} className="h-5 md:pl-4 pl-1"></img> : <p></p>}
                    <label htmlFor="uploadfile" className="text-start pl-15 absolute pointer-events-none">{props.label}</label>
                    {props.upload_icon=="" ? <button type="submit" className="text-white text-md tracking-wider w-full h-full group-hover:cursor-pointer text-center"></button> : <input name="uploadfile" type="file" className="text-white absolute tracking-wider w-full h-full group-hover:cursor-pointer text-center opacity-0" onChange={(e)=>setFile(e.target.files?.[0])}></input>}
                </div>
                {
                    props.upload_icon!=""?
                        localFile == ""?
                        <div className="flex flex-col">
                                <p className="text-white text-sm tracking-wider">No documents uploaded!</p>
                                <p className="text-white text-sm tracking-wider"> The maximum size of the document allowed is 25mb. Allowed types: .pdf, .doc, .docx.</p>
                        </div>
                        :
                        <p className="text-white text-sm tracking-wider">Document Uploaded!</p>
                    :
                    <p></p>
                }
            </div>
        </div>
    );
}
export default UploadButton;