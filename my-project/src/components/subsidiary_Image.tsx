type imgProps = {
    titleSrc : string,
    descSrc : string,
    tagline : string,
    desc : string,
    lm : string
}

const SubsidiaryImage:React.FC<imgProps> = (props : imgProps) => {
    return(
        <div className="relative lg:h-70 h-52 2xl:w-110 flex-none  lg:w-98 w-78 flex justify-center items-center overflow-hidden">
            <img className="rounded-sm lg:flex lg:h-100 2xl:h-120 h-90" src="/resources/grey_rectangle.png"></img>
            <img src={props.titleSrc} className="2xl:h-0 lg:h-0 h-0"/>
            <img src={props.descSrc} className="2xl:h-0 lg:h-0 h-0"/>
            <div>
                <h1 className="text-lg tracking-widest font-bold text-white pb-0">{props.tagline}</h1>
                <p className="text-xs font-extralight text-white/60">{props.desc}</p>
                <p className="absolute text-sm font-bold text-white 2xl:bottom-3 lg:bottom-6 bottom-3">{props.lm}</p>
            </div>
        </div>
    );
}
export default SubsidiaryImage;