import Navbar from "@/components/navbar";
import SubsidiaryIntro from "@/components/subsidiaries_intro";
import EducationSection from "@/components/subsidiary_section";
import AllSubsidiaries from "@/components/subsidiaries_all";

export default function Application(){
    return(
        <div className="flex flex-col lg:gap-y-0 2xl:gap-y-30 gap-20 bg-black overflow-clip">
            <Navbar/>
            <SubsidiaryIntro/>
            <AllSubsidiaries/>
        </div>
    );
}