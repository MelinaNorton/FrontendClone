'use client'
import React from 'react';

type imgProps = {
    src : string,
    alt : string,
    title : string,
    desc : string,
    lm : string,
    num : string
}

const IndustryImage: React.FC<imgProps> = ({
    src, 
    alt, 
    title, 
    desc, 
    lm, 
    num}: imgProps) => {
    const oneLine = title == "Retail & E-Commerce"

    return(
        <div className="relative lg:h-70 h-52 2xl:w-106 flex-none  lg:w-98 w-78 flex justify-start items-start overflow-hidden hover:cursor-pointer">
            <div className="group">
                <img
                src = {src}
                className="absolute inset-0 2xl:opacity-100 lg:opacity-100 opacity-0 rounded-xl lg:h-70 h-52 transition-opacity group-hover:opacity-0 duration-1000"
                />
                <img
                    src = {alt}
                    className="absolute inset-0 rounded-xl lg:h-70 h-52 transition-opacity 2xl:opacity-0 lg:opacity-0 group-hover:opacity-100 duration-1000"
                />
                <p className="absolute bottom-0 right-2 text-9xl opacity-0 text-white/30 transition-opacity group-hover:opacity-100 duration-1000 h-35 pl-15 z-20 ease-in-out">{num}</p>
                <h1 className="2xl:text-2xl lg:text-2xl text-lg font-semibold tracking-wider text-white absolute top-7 2xl:left-7 lg:left-7 left-5">{title}</h1>
                <p className={`absolute 2xl:bottom-10 2xl:left-8 lg:left-8 ${oneLine ? 'lg:bottom-10 bottom-30 left-5 transition-transform lg:group-hover:-translate-y-35 2xl:group-hover:-translate-y-30 group-hover:-translate-y-30  duration-1000' : 'lg:bottom-10 bottom-25 left-6 transition-transform group-hover:-translate-y-30 duration-1000'} 2xl:text-xl lg:text-xl 2xl:w-70 font-extralight text-white/60 tracking-wider`}>{desc}</p>
                <p className="absolute text-sm font-bold text-white/60 2xl:bottom-3 lg:bottom-6 bottom-3 2xl:left-8 lg:left-8 left-6">{lm}</p>
            </div>
        </div>
    );
}
export default IndustryImage;