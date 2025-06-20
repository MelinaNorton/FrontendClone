type inputProps = {
    label : string,
    required : boolean,
    isDatePicker : boolean
}

const TextInput:React.FC<inputProps> = (props:inputProps) => {
    return(
        <div className="flex flex-col 2xl:w-110 lg:w-95 w-full">
            <h1 className="text-white text-lg tracking-wider">{props.required ? props.label+"*" : props.label}</h1>
            <input type={props.isDatePicker ? "date" : "text"} className="bg-gray-300/20 2xl:w-110 w-full lg:w-95 h-15 flex flex-row justify-end items-center rounded-md hover:bg-gray-400/40 p-3 focus:bg-gray-400/40 focus:outline-none hover:cursor-pointer border-none"/>
        </div>
    );
}
export default TextInput;