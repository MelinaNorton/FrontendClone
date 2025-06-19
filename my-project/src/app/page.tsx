import HomeSection from "@/components/home";
import ServiceSection from "@/components/services";
import LocationsSection from "@/components/locations_references";
import SubsidiariesSection from "@/components/subsidiaries";
import ApplyMeet from "@/components/apply_meet";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";

export default function Home(){
  return(
    <div>
      <Navbar/>
      <div className="flex flex-col lg:gap-y-15 2xl:gap-15 gap-0 bg-black overflow-clip">
      <div className="bg-black flex flex-col 2xl:gap-35 lg:gap-35 md:gap-15 gap-4">
        <HomeSection/> 
        <ServiceSection/>
      </div>
      <LocationsSection/>
      <SubsidiariesSection/>
      <ApplyMeet/>
      <FooterSection/>
    </div>
    </div>
  );
}