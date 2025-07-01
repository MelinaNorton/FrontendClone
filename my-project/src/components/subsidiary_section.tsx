import SubsidiaryBtn from "./subsidiary_btn";
import { validColor } from "./subsidiary_btn";
import SubsidiaryLogo from "./subsidiaryLogos";
import EducationImages from "./education_images";
import ScrollableCarousel from "./scrollable_carousel";

type SectionProps = {
    logo : string,
    text :string,
    srcs : string[],
    num_imgs : number
    num_btns : number,
    btn_labels : string[],
    bg_color : string
}
const SubsidiarySection:React.FC<SectionProps> = ({logo, text, srcs, num_imgs, btn_labels, bg_color}) => {
    return(
        <div className="">
            <img className="absolute w-full h-full z-0" src={bg_color}></img>
            <main className="md:h-[40vw] min-h-screen w-screen flex flex-col lg:gap-y-10 gap-y-4 justify-center items-end relative font-sans md:p-6 p-4 overflow-x-clip">
                <div className="flex md:flex-row flex-col space-x-30 z-10 w-full">
                    <img className="h-12" src={logo}></img>
                    <div className="flex flex-col space-y-4">
                        <p className="text-white/70 text-md font-bold">{text}</p>
                        <div className="flex flex-row space-x-4 space-y-2 max-w-none">
                            {btn_labels.map((title, i) =>(
                                <SubsidiaryBtn title={title} color={"gray"} key={i}/>
                            ))}
                        </div>
                        <ScrollableCarousel srcs={srcs} img_num={num_imgs}/>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default SubsidiarySection