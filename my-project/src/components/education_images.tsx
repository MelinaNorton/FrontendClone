'use client'
import { useInView } from 'react-intersection-observer';

type SubsidiarySectionImageProps = {
    src : string,
}


const EducationImages = ({src}:SubsidiarySectionImageProps) =>{
    const {ref, inView} = useInView({
        threshold:0.1,
        trackVisibility:true,
        triggerOnce:true,
        delay:200
    })
    return(
        <img className={`h-40 rounded-lg transition-opacity duration-400 ${inView? 'opacity-100':'opacity-0'}`} src={src} ref={ref}></img>
    );
}
export default EducationImages