type imgProps = {
    src : string,
    title : string,
    desc : string,
    lm : string
}

const IndustryImage: React.FC<imgProps> = (props: imgProps) => {
    const oneLine = props.title == "Retail & E-Commerce"
    return(
        <div className="relative lg:h-70 h-52 2xl:w-110 flex-none  lg:w-98 w-78 flex justify-start items-start overflow-hidden">
            <img
                src = {props.src}
                className=" rounded-xl lg:h-70 h-52"
            />
            <h1 className="2xl:text-2xl lg:text-2xl text-lg font-semibold tracking-wider text-white absolute top-7 2xl:left-7 lg:left-7 left-5">{props.title}</h1>
            <p className={`absolute 2xl:bottom-38 2xl:left-8 lg:left-8 ${oneLine ? 'lg:bottom-44 bottom-32 left-5' : 'lg:bottom-38 bottom-25 left-6'} 2xl:text-xl lg:text-xl 2xl:w-70 font-extralight text-white/60 tracking-wider`}>{props.desc}</p>
            <p className="absolute text-sm font-bold text-white/60 2xl:bottom-3 lg:bottom-6 bottom-3 2xl:left-8 lg:left-8 left-6">{props.lm}</p>
        </div>
    );
}
export default IndustryImage;