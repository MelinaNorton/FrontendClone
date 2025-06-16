type locationsProps = {
    bgSrc : string,
    title : string,
    desc : string
}

const LocationPic:React.FC<locationsProps> = (props : locationsProps) =>{
    return(
        <div className="relative lg:h-94 h-30 2xl:h-150">
            <img src={props.bgSrc} className=" rounded-xl lg:h-94 h-30 2xl:h-150"></img>
            <h1 className="absolute 2xl:lg lg:text-lg text-lg font-semibold tracking-wider text-white 2xl:top-0 lg:top-0 top-0">{props.title}</h1>
            <p className="absolute text-sm font-bold text-white/60 2xl:bottom-0 lg:bottom-0 bottom-0">{props.desc}</p>
        </div>
    );
}
export default LocationPic;