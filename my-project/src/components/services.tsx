const ServiceSection = () => {
    return (
        <main className="bg-gradient-to-b from-blue-950/20 to-black bg-cover h-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans p-5">
            <div className="flex 2xl:flex-row lg:flex-row flex-col gap-x-20 2xl:w-4/10 lg:w-5xl w-80">
                <h1 className="lg:pr-10 lg:text-4xl text-2xl font-bold 2xl:pr-10 pr-10">Our Services</h1>
                <div className="flex flex-col lg:w-5xl">
                    <p className="lg:text-2xl font-semibold text-white pb-5">End-to-end tech innovation for optimized performance.</p>
                    <p className="lg:text-xl font-extralight text-white/60 pb-5">Explore new horizons and unleash your full potential. With our comprehensive solution ecosystem, we conceptualize, develop, and manage your future organization to give you a competitive advantage.</p>
                    <button className="flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-4xl text-sm font-extralight lg:px-8 px-2 py-2 lg:py-4 w-30 lg:w-40">LEARN MORE</button>
                </div>
            </div>
            <div className="flex flex-row justify-cente gap-x-8">
                    <img src = "/resources/DCE.png" className=" rounded-xl lg:h-94 h-30"></img>
                    <img src = "/resources/Programming.png" className="rounded-xl lg:h-94 h-30"></img>
                    <img src = "/resources/MDMS.png" className="rounded-xl lg:h-94 h-30"></img>
                    <img src = "/resources/LAS.png" className="hidden lg:flex  rounded-xl lg:h-94 h-30"></img>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col gap-x-20 2xl:w-4/10 lg:w-5xl w-80">
                <h1 className="lg:pr-10 lg:text-4xl text-2xl font-bold 2xl:pr-10 pr-10">Industries</h1>
                <p className="lg:text-xl font-extralight text-white/60 pb-5"> Leaders in your industry, we innovate to deliver exceptional CX globally. Operating as a seamless extension of your brand, we connect and engage behind the scenes to deliver unmatched customer experiences.</p>
                <div className="flex gap-x-3">
                    <button className="flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15">&larr;</button>
                    <button className="flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15">&rarr;</button>
                </div>
            </div>
            <div className="flex flex-row justify-cente gap-x-8">
                <img src = "/resources/telecom.png" className=" rounded-xl lg:h-70 h-25"></img>
                <img src = "/resources/shopping.png" className=" rounded-xl lg:h-70 h-25"></img>
                <img src = "/resources/governance.png" className="hidden lg:flex rounded-xl lg:h-70 h-30"></img>
            </div>
            <div className="flex 2xl:flex-row lg:flex-row flex-col gap-x-20 2xl:w-4/10 lg:w-5xl lg:items-center w-80">
                <h1 className="lg:pr-20 lg:text-3xl text-2xl font-bold pr-10">Industry Certification & Compliance</h1>
                <p className="lg:text-lg font-extralight text-white/60 pb-5">At SPEEEX, we uphold stringent industry benchmarks to safeguard the security, quality, and durability of our services. Our commitment to excellence is reinforced by our compliance with globally recognized certifications accredited by TUV Rheinland GmbH.</p>
            </div>
            <div className="flex flex-row justify-center lg:gap-x-2 2xl:gap-x-5">
                <img src = "/resources/certification.png" className=" rounded-xl lg:flex lg:h-23 2xl:h-24 sm:h-30"></img>
                <img src = "/resources/certification.png" className=" rounded-xl lg:flex lg:h-23 2xl:h-24 sm:h-30"></img>
                <img src = "/resources/certification.png" className=" hidden lg:flex rounded-xl lg:h-23 2xl:h-24 sm:h-30"></img>
                <img src = "/resources/certification.png" className=" hidden lg:flex rounded-xl lg:h-23 2xl:h-24 sm:h-30"></img>
                <img src = "/resources/certification.png" className=" hidden lg:flex rounded-xl lg:h-23 2xl:h-24 sm:h-30"></img>
                <img src = "/resources/certification.png" className=" hidden lg:flex rounded-xl lg:h-23 2xl:h-24 sm:h-30"></img>
            </div>
        </main>
    );
}
export default ServiceSection;