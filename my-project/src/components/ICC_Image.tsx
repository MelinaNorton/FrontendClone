type ICCProps = {
    ICCSrc : string,
    ICC_Bg : string
}

const ICCImage:React.FC<ICCProps> = (props : ICCProps) =>{
    return (
        <div className="relative flex flex-col items-center justify-center lg:h-23 2xl:h-24 h-23 2xl:w-50 lg:w-70 w-40 transform-all hover:scale-102 duration-500">
            <img src={props.ICC_Bg} className="2xl:rounded-md lg:rounded-md rounded-sm lg:flex lg:h-23 2xl:h-24 h-23 2xl:w-50 lg:w-70 w-40"></img>
            <img src={props.ICCSrc} className="absolute  2xl:h-22 lg:h-18 h-20 2xl:top-0 lg:top-4 top-4"></img>
        </div>
    );
}
export default ICCImage;