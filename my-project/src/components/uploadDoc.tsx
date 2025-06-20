type uploadProps = {
    isRequired : boolean,
    title : string,
    label: string,
    upload_icon : string
}

const UploadButton:React.FC<uploadProps> = (props:uploadProps) => {
    return(
        <div className="group">
            <h1 className="text-white text-lg tracking-wider">{props.isRequired ? props.title+"*" : props.title}</h1>
            <div className="bg-gray-300/20 w-55 h-15 rounded-md hover:bg-gray-400/40 p-2 flex flex-row justify-start items-center">
                {props.upload_icon!="" ? <img src={"/resources/" + props.upload_icon} className="h-5 pl-4"></img> : <p></p>}
                <button className="text-white text-md tracking-wider w-full h-full group-hover:cursor-pointer text-center">{props.label}</button>
            </div>
        </div>
    );
}
export default UploadButton;