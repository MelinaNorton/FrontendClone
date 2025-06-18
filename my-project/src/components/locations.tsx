type locationsProps = {
    bgSrc : string,
    title : string,
    desc : string,
    lm : string
}

const LocationPic:React.FC<locationsProps> = (props : locationsProps) =>{
    return(
        <div className="flex flex-col items-center justify-center p-4">
            <img src={props.bgSrc} className="flex rounded-xl lg:h-94 md:h-65 h-80 2xl:h-150 2xl:w-300 lg:w-200 md:w-300 w-90"></img>
            <div className="relative flex flex-col 2xl:w-150 lg:w-150 2-100 2xl:pt-0 lg:pt-0 pt-3">
                <h1 className="2xl:absolute lg:absolute 2xl:lg lg:text-lg md:text-3xl text-lg font-bold tracking-wider text-white 2xl:bottom-18 lg:bottom-18 bottom-18 2xl:left-6 lg:left-6 left-6 2xl:pb-0 lg:pb-0 md:pb-6 pb-0">{props.title}</h1>
                <p className="2xl:absolute lg:absolute text-xs font-semibold text-white/60 2xl:bottom-5 lg:bottom-5 bottom-5 2xl:left-6 lg:left-6 left-6">{props.desc}</p>
            </div>
        </div>
    );
}
export default LocationPic;