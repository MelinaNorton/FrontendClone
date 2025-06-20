type inputProps = {
    label : string,
    required : boolean,
    isDatePicker : boolean
}

const TextInput:React.FC<inputProps> = (props:inputProps) => {
    return(
        <div className="flex flex-col md:w-80 w-70">
            <h1 className="text-white text-lg tracking-wider">{props.required ? props.label+"*" : props.label}</h1>
            <input type={props.isDatePicker ? "date" : "text"} className="bg-gray-300/20 md:w-90 w-80 h-15 flex flex-row justify-end items-center rounded-md hover:bg-gray-400/80 p-1 focus:bg-gray-400 hover:cursor-pointer border-none"/>
        </div>
    );
}
export default TextInput;