import SubsidiaryBtn from "./subsidiary_btn";
import { validColor } from "./subsidiary_btn";
import SubsidiaryLogo from "./subsidiaryLogos";
import EducationImages from "./education_images";
import ScrollableCarousel from "./scrollable_carousel";

type sectionProps = {
    logo : string,
    text :string,
    srcs : string[],
    num_imgs : number
    num_btns : number,
    btn_labels : string[],
    bg_color : string
}
const SubsidiarySection:React.FC<sectionProps> = ({logo, text, srcs, num_imgs, btn_labels}) => {
    return(
        <main className="h-[40vw] flex flex-col lg:gap-y-10 gap-y-4 justify-center items-end relative font-sans p-6 overflow-x-clip">
            <img className="absolute w-full h-full z-0" src="/resources/s_bg_education.png"></img>
            <div className="flex flex-row space-x-30 z-10 w-full">
                <img className="h-12" src={logo}></img>
                <div className="flex flex-col space-y-4">
                    <p className="text-white/70 text-md font-bold">{text}</p>
                    <div className="flex flex-row space-x-4 space-y-2 max-w-none">
                        {btn_labels.map((title, i, key) =>(
                            <SubsidiaryBtn title={title} color={"gray"} key={i}/>
                        ))}
                    </div>
                    <ScrollableCarousel srcs={srcs} img_num={num_imgs}/>
                </div>
            </div>
        </main>
    );
}
export default SubsidiarySection