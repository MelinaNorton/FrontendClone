type uploadProps = {
    label: string,
    upload_icon : string
}

const UploadButton:React.FC<uploadProps> = (props:uploadProps) => {
    return(
        <div className="group bg-gray-300/20 w-50 h-15 rounded-md hover:bg-gray-400/80 p-1 flex flex-row justify-start items-center space-x-2">
            <img src={"/resources/" + props.upload_icon} className="h-5"></img>
            <button className="text-white text-md tracking-wider w-full h-full group-hover:cursor-pointer text-start">{props.label}</button>
        </div>
    );
}
export default UploadButton;