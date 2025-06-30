type imgProps = {
    titleSrc : string,
    descSrc : string,
    tagline : string,
    desc : string,
    lm : string
}

const SubsidiaryImage:React.FC<imgProps> = ({
    titleSrc,
    descSrc,
    tagline,
    desc,
    lm
} : imgProps) => {
    return(
        <div className="relative overflow-clip">
            <div className="flex justify-center items-center rounded-md relative lg:h-130 2xl:h-130 h-80 2xl:w-110 flex-col gap-5 lg:w-95 w-85 overflow-hidden hover:cursor-pointer">
                <img className="rounded-md lg:flex lg:h-120 hover:scale-y-105 2xl:h-115 h-100 origin-bottom duration-800 transition-all" src="/resources/grey_rectangle.svg"></img>
                <img src={titleSrc} className="absolute 2xl:h-7 lg:h-7 h-8 lg:top-20 top-8"/>
                <img src={descSrc} className="absolute 2xl:h-22 lg:h-22 h-18 lg:top-35 top-22"/>
                <div className="absolute flex flex-col 2xl:gap-3 lg:gap-3 gap-1 items-center justify-center 2xl:top-62 lg:top-62 top-42 lg:w-80 w-68">
                    <h1 className="text-lg tracking-widest font-bold text-white pb-0">{tagline}</h1>
                    <p className="text-sm font-extralight text-white/60 text-center">{desc}</p>
                </div>
                <p className="absolute text-xs font-bold text-white 2xl:bottom-10 lg:bottom-20 bottom-3">{lm}</p>
            </div>
        </div>
        
    );
}
export default SubsidiaryImage;