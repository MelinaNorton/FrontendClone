'use client'
import { useInView } from 'react-intersection-observer';

type educationImageProps = {
    src : string,
}


const EducationImages = ({src}:educationImageProps) =>{
    const {ref, inView} = useInView({
        threshold:0.1,
        trackVisibility:true,
        triggerOnce:true,
        delay:700
    })
    return(
        <img className={`h-40 rounded-lg transition-opacity duration-1000 ${inView? 'opacity-100':'opacity-0'}`} src={src} ref={ref}></img>
    );
}
export default EducationImages