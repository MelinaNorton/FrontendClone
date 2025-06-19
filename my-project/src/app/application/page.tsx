import Navbar from "@/components/navbar";
import AplikoIntro from "@/components/aplikoIntro";

export default function Application(){
    return(
        <div className="flex flex-col lg:gap-y-15 2xl:gap-15 gap-0 bg-black overflow-clip">
            <Navbar/>
            <AplikoIntro/>
        </div>
    );
}