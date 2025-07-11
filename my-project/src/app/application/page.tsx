import Navbar from "@/components/navbar";
import AplikoIntro from "@/components/aplikoIntro";
import AppForm from "@/components/app_form";

export default function Application(){
    return(
        <div className="flex flex-col lg:gap-y-15 2xl:gap-y-30 gap-20 bg-black overflow-clip">
            <Navbar/>
            <AplikoIntro/>
            <AppForm/>
        </div>
    );
}