type clientProps = {
    bgSrc : string,
    logoSrc : string
}

const ClientImage:React.FC<clientProps> = (props:clientProps) =>{
    let isPNG = false;
    if (props.logoSrc.includes(".png")){
        isPNG = true;
    }
    //absolute 2xl:h-5 ${} lg:h-5 h-5 2xl:top-0 lg:top-10 top-9

    return(
        <div className="relative flex flex-col items-center justify-center 2xl:h-25 lg:h-25 h-23 2xl:w-53 lg:w-50 w-50">
            <img src={props.bgSrc} className="rounded-sm 2xl:h-25 lg:h-22 h-23 2xl:w-53 lg:w-48 w-50"></img>
            <img src={props.logoSrc} className={`absolute ${isPNG ? 'lg:h-18 2xl:h-20 h-20 2xl:top-2 lg:top-4 top-2' : '2xl:h-5 lg:h-5 h-5 2xl:top-10 lg:top-10 top-9'}`}></img>
        </div>
    );
}

export default ClientImage;