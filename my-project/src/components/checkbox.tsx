
type checkProps = {
    label : string,
    onChange : (newval:boolean)=>void,
    checked : boolean
}

const CheckBox:React.FC<checkProps> = ({label , onChange , checked}:checkProps) =>{
    return(
        <div className="flex flex-row items-center justify-start">
            <p className="text-white text-md tracking-wider">{label}</p>
            <input type="checkbox" 
            className=" h-5 w-5"
            checked={checked}
            onChange = {e => onChange(e.target.checked)}
            ></input>
        </div>
    );
}
export default CheckBox;