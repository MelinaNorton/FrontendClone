type inputProps = {
    label : string,
    required : boolean,
    isDatePicker : boolean,
    onChange : (newval:string)=>void
    disabled : boolean
}

const TextInput:React.FC<inputProps> = (props:inputProps) => {
    const setValue = (newval:string):void =>{
        props.onChange(newval)
    }
    return(
        <div className="flex flex-col 2xl:w-110 lg:w-95 w-full ">
            <h1 className="text-white text-lg tracking-wider">{props.required ? props.label+"*" : props.label}</h1>
            <input disabled={props.disabled} type={props.isDatePicker ? "date" : "text"} className={`${props.disabled ? 'bg-gray-700/10' : 'bg-gray-300/20 hover:bg-gray-400/40 focus:bg-gray-400/40 focus:outline-none hover:cursor-pointer'} 2xl:w-110 w-full lg:w-95 h-15 flex flex-row justify-end items-center rounded-md p-3 text-white`} onChange={e=>setValue(e.target.value)}/>
        </div>
    );
}
export default TextInput;