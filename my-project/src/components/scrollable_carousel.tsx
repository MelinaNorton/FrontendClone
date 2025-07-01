'use client'
import EducationImages from "./education_images";

type CarouselProps = {
    img_num : number,
    srcs : string[]
}

const ScrollableCarousel = ({img_num, srcs}:CarouselProps) =>{
    return(
        <div className={`flex flex-row space-x-8 space-y-2 max-w-none overflow-x-scroll [&::-webkit-scrollbar]:hidden`}>
            {srcs.map((src, i, key) =>(
                <EducationImages src={src} key={i}/>
            ))}
        </div>
    );
}

export default ScrollableCarousel