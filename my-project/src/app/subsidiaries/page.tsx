import Navbar from "@/components/navbar";
import SubsidiaryIntro from "@/components/subsidiaries_intro";
import EducationSection from "@/components/subsidiary_section";
import AllSubsidiaries from "@/components/subsidiaries_all";
import ApplyMeet from "@/components/apply_meet";

export default function Application(){
    return(
        <div className="flex flex-col lg:gap-y-0 2xl:gap-y-30 gap-y-5 bg-black overflow-clip">
            <Navbar/>
            <SubsidiaryIntro/>
            <AllSubsidiaries/>
            <ApplyMeet/>
        </div>
    );
}