type insightsProps = {
    bgSrc : string,
    logoSrc : string,
    title : string
}

const InsightsImage:React.FC<insightsProps> = (props : insightsProps) =>{
    return(
        <div className="flex-none lg:h-90 2xl:h-110 h-50 2xl:w-160 w-90 lg:w-130">
            <img src={props.bgSrc} className="relative flex-none rounded-lg lg:h-90 2xl:h-110 h-50 2xl:w-160 w-90 lg:w-130"></img>
            <img src={props.logoSrc}></img>
            <p className="absolute 2xl:bottom-0 lg:bottom-0 bottom-0 2xl:text-2xl lg:text-2xl text-lg font-semibold tracking-wider text-white">{props.title}</p>
        </div>
    );
}
export default InsightsImage;