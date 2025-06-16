type imgProps = {
    titleSrc : string,
    descSrc : string,
    tagline : string,
    desc : string,
    lm : string
}

const SubsidiaryImage:React.FC<imgProps> = (props : imgProps) => {
    return(
        <div className="relative lg:h-120 h-80 2xl:w-110 flex-col gap-5 lg:w-95 w-85 flex justify-center items-center overflow-hidden">
            <img className="rounded-md lg:flex lg:h-120 2xl:h-120 h-100" src="/resources/grey_rectangle.svg"></img>
            <img src={props.titleSrc} className="absolute 2xl:h-0 lg:h-7 h-7 lg:top-20 top-12"/>
            <img src={props.descSrc} className="absolute 2xl:h-0 lg:h-22 h-18 lg:top-35 top-25"/>
            <div className="absolute flex flex-col 2xl:gap-3 lg:gap-3 gap-1 items-center justify-center 2xl:top-62 lg:top-62 top-44 lg:w-80 w-68">
                <h1 className="text-lg tracking-widest font-bold text-white pb-0">{props.tagline}</h1>
                <p className="text-sm font-extralight text-white/60 text-center">{props.desc}</p>
            </div>
            <p className="absolute text-xs font-bold text-white 2xl:bottom-3 lg:bottom-20 bottom-8">{props.lm}</p>
        </div>
    );
}
export default SubsidiaryImage;