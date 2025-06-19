type insightsProps = {
    bgSrc : string,
    title : string
}

const InsightsImage:React.FC<insightsProps> = (props : insightsProps) =>{
    return(
        <div className="group relative flex-none lg:h-90 2xl:h-110 h-70 2xl:w-160 w-90 lg:w-130 rounded-2xl overflow-hidden">
            <img src={props.bgSrc} className="flex-none rounded-2xl lg:h-90 2xl:h-110 h-70 2xl:w-160 w-90 lg:w-130 group-hover:scale-120 transition-transform duration-1000"></img>
            <div className="rounded-2xl absolute flex 2xl:h-25 lg:h-15 h-20 backdrop-blur-sm 2xl:w-160 lg:w-130 w-90 2xl:bottom-0 lg:bottom-0 bottom-0 items-center justify-center p-2 group-hover:scale-y-150 origin-bottom transition-transform duration-1000">
            </div>
            <p className="absolute bottom-6 2xl:text-2xl lg:text-xl text-lg max-width:130 font-semibold tracking-wider text-white truncate transition-transform group-hover:-translate-y-4 duration-1000 group-hover:scale-y-100 w-full overflow-ellipsis">{props.title}</p>
        </div>
    );
}
export default InsightsImage;