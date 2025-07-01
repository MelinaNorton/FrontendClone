import SubsidiaryBtn from "./subsidiary_btn";
import { validColor } from "./subsidiary_btn";
import SubsidiaryLogo from "./subsidiaryLogos";

const SubsidiaryIntro = () => {
    return(
        <main className="md:h-[40vw] min-h-screen flex flex-col lg:gap-y-10 gap-y-4 justify-center items-end relative font-sans p-6 overflow-x-clip">
            <img className="absolute w-full h-full z-0" src="/resources/s_bg_intro.png"></img>
            <div className="flex flex-col space-y-8 z-10 w-full h-full justify-center items-start">
                <h1 className="text-white md:text-5xl text-3xl tracking-wider font-bold">Our Subsidiaries</h1>
                <div className="flex flex-row space-x-4 space-y-2 max-w-none">
                    <SubsidiaryBtn title={"Education"} color={"orange"}/>
                    <SubsidiaryBtn title={"Software Development"} color={"pink"}/>
                    <SubsidiaryBtn title={"e-Learning"} color={"purple"}/>
                    <SubsidiaryBtn title={"Media"} color={"blue"}/>
                    <SubsidiaryBtn title={"Recruitment"} color={"gray"}/>
                    <SubsidiaryBtn title={"SAP Counseling"} color={"green"}/>
                </div>
                <p className="text-white/70 md:text-md text-sm font-bold">Within our network, we proudly oversees a diverse portfolio of subsidiaries dedicated to advancing specialized services in today’s dynamic world. Each subsidiary operates with a shared vision to innovation, excellence, and client satisfaction, offering unique expertise and capabilities that enhance our overall industry presence and client offerings.</p>
                <div className="flex md:flex-row flex-col space-x-10 space-y-10">
                    <div className="flex flex-row gap-x-4 md:flex-none">
                        <SubsidiaryLogo src={"/resources/s_education.svg"}/>
                        <SubsidiaryLogo src={"/resources/s_rhenum.svg"}/>
                    </div>
                    <div className="flex flex-row gap-x-4 md:flex-none">
                        <SubsidiaryLogo src={"/resources/s_ascendio.png"}/>
                        <SubsidiaryLogo src={"/resources/s_medienhaus.svg"}/>
                    </div>  
                    <div className="flex flex-row gap-x-4 md:flex-none">
                        <SubsidiaryLogo src={"/resources/s_staffify.svg"}/>
                        <SubsidiaryLogo src={"/resources/s_PINSS.svg"}/>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default SubsidiaryIntro