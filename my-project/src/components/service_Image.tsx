import React from 'react'

type imgProps = {
    src : string,
    number : string,
    title : string,
    desc : string,
    lm : string
}

const ServiceImage: React.FC<imgProps> = (props:imgProps) => {
    const hideOnMobile = props.number === '03' || props.number === '04'
    
  return (
    <div className={`relative lg:h-94 h-85 2xl:w-78 lg:w-70 w-78 flex justify-start items-start overflow-hidden`}>
        <img
        src = {props.src}
        className=" rounded-xl lg:h-90 2xl:h-95 h-85"
        />
        <p className="absolute font-sans text-5xl font-extralight text-white/60 z-0 pt-6 pl-6">{props.number}</p>
        <div className="absolute flex flex-col 2xl:gap-4 lg:gap-0 gap-0 lg:h-94 h-85 w-76 p-7 pt-42">
            <h1 className="text-xl tracking-widest font-bold text-white pb-0">{props.title}</h1>
            <p className="text-xs font-extralight text-white/60">{props.desc}</p>
            <p className="absolute text-sm font-bold text-white 2xl:bottom-3 lg:bottom-6 bottom-3">{props.lm}</p>
        </div>
    </div>
  );
}
export default ServiceImage;