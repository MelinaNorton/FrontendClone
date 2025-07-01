type subsidiaryLogoProps = {
    src : string
}

const SubsidiaryLogo:React.FC<subsidiaryLogoProps> = ({src}:subsidiaryLogoProps) => {
    return(
        <div className="flex flex-col items-center justify-center">
            <img src={src} className="h-7 transition-all hover:scale-110 duration-1000 opacity-50 hover:opacity-100"></img>
        </div>
    );
}
export default SubsidiaryLogo