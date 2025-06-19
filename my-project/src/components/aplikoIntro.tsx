const AplikoIntro = () =>{
    return(
        <div className="relative">
            <div className="bg-black min-h-screen flex flex-col jutify-center items-center relative overflow-x-clip font-sans w-screen">
                <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-blue-950 to-black gap-y-40">
                    <img src="/resources/apliko_rainbow_bg.svg" className="absolute max-w-none h-100 z-10"></img>
                    <div className="w-full bg-[url('/resources/apliko_png_bg.png')] h-full z-0 absolute"></div>
                    <div className="flex flex-col absolute bottom-5 w-[60vw] justify-center items-center space-y-50 pt-5">
                        <img src="/resources/SPEEEX_Logo.png" className="h-10 lg:h-15 w-80 z-10"></img>
                        <div className="flex flex-col justify-center items-center w-[80vw] md:w-[95vw] z-10 gap-y-6">
                                <h1 className="text-xl font-bold text-center tracking-wider">Thank you for your interest in becoming a part of SPEEEX.</h1>
                                <p className="text-sm tracking-wider text-center text-white">Each of our members represents a success story, with full dedication and passion. It's your chance to build your story together with SPEEEX. Become part of ours, APPLY NOW!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AplikoIntro;