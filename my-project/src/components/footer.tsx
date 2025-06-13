const FooterSection = () => {
    return(
        <main className="bg-black bg-cover 2xl:h-[30%vw] lg:h-[30%vw] h-[100%vw] flex flex-col justify-start items-center relative overflow-x-clip 2xl:pt-60 lg:pt-60 pt-0">
            <img className="z-0 w-screen h-0.05 2xl:pb-13 lg:pb-0 pb-15" src="/resources/Footer_Rainbow.png"></img>
            
                <div className="flex flex-row 2xl:gap-30 lg:gap-0 gap-0">
                    <div className="flex flex-row 2xl:gap-10 lg:gap-10 gap-5">
                        <div className="flex flex-col 2xl:gap-1 lg:gap-0 gap-0">
                        <h1 className="text-xs font-bold text-white tracking-wider pb-1">About Us</h1>
                        <p className="text-xs font-extralight text-white/60">Our Story</p>
                        <p className="text-xs font-extralight text-white/60">Leadership</p>
                        <p className="text-xs font-extralight text-white/60">Awards & Recognitions</p>
                        <p className="text-xs font-extralight text-white/60">CSR</p>
                        <h1 className="text-xs font-bold text-white tracking-wider pb-1">Services</h1>
                        <h1 className="text-xs font-bold text-white tracking-wider pb-1">Industries</h1>
                    </div>
                    <div className="flex flex-col 2xl:gap-1 lg:gap-0 gap-0">
                        <h1 className="text-xs font-bold text-white tracking-wider pb-1">Insights</h1>
                        <p className="text-xs font-extralight text-white/60">Blogs</p>
                        <p className="text-xs font-extralight text-white/60">Case Studies</p>
                        <p className="text-xs font-extralight text-white/60 pb-5">White Papers</p>
                        <h1 className="text-xs font-bold text-white tracking-wider pb-1">Subsidiaries</h1>
                        <h1 className="text-xs font-bold text-white tracking-wider pb-1">Contact Us</h1>
                    </div>
                </div>
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col 2xl:gap-0 lg:gap-0 gap-0 2xl:pr-20 lg:pr-0 pr-0">
                        <h1 className="text-xs font-bold text-white tracking-wider pb-2">Contact</h1>
                        <p className="text-xs font-extralight text-white/60">info@speeex.com</p>
                        <p className="text-xs font-extralight text-white/60">+303 49 49 16 49</p>
                    </div>
                    <div className="flex flex-col 2xl:gap-0 lg:gap-0 gap-0">
                        <h1 className="text-xs font-bold text-white tracking-wider pb-2">Locations</h1>
                        <p className="text-xs font-extralight text-white/60">Prishtina Headquarters</p>
                        <p className="text-xs font-extralight text-white/60">St. Tirana, 10000</p>
                        <p className="text-xs font-extralight text-white/60">Vushtrri Office</p>
                        <p className="text-xs font-extralight text-white/60">St. Adem Jashari, 42000</p>
                    </div>
                    <div className="flex flex-col 2xl:gap-0 lg:gap-0 gap-0">
                        <div className="h-6 w-1-"></div>
                        <p className="text-xs font-extralight text-white/60">Ferizaj Office</p>
                        <p className="text-xs font-extralight text-white/60">St. Driton Islami, 70000</p>
                        <p className="text-xs font-extralight text-white/60">Prizren Offices</p>
                        <p className="text-xs font-extralight text-white/60">St. Tirana, 20000</p>
                    </div>
                </div>
                    <div className="flex flex-col 2xl:gap-0 lg:gap-0 gap-0">
                        <h1 className="text-xs font-bold text-white tracking-wider">Follow Us</h1>
                    </div>
                </div>
        </main>
    );
}
export default FooterSection;