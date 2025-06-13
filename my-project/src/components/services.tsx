const ServiceSection = () => {
    return (
        <main className="bg-black bg-cover flex flex-col lg:gap-y-10 2xl:gap-y-15 gap-y-10 justify-start items-center relative overflow-x-clip font-sans p-5">
            <div className="flex lg:flex-row 2xl:flex-col md:flex-row flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 2xl:w-4/10 lg:w-69/70 w-90">
                <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10 lg:whitespace-nowrap">Our Services</h1>
                <div className="flex flex-col lg:w-5xl">
                    <p className="lg:text-xl font-semibold text-white pb-5">End-to-end tech innovation for optimized performance.</p>
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5">Explore new horizons and unleash your full potential. With our comprehensive solution ecosystem, we conceptualize, develop, and manage your future organization to give you a competitive advantage.</p>
                    <button className="flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-4xl text-sm font-extralight lg:px-8 px-2 py-2 lg:py-4 w-30 lg:w-40">LEARN MORE</button>
                </div>
            </div>
            <div className="flex flex-row justify-cente lg:gap-x-8 2xl:gap-x-8 gap-x-5">
                    <img src = "/resources/DCE.png" className=" rounded-xl lg:h-94 h-85"></img>
                    <img src = "/resources/Programming.png" className="rounded-xl lg:h-94 h-85"></img>
                    <img src = "/resources/MDMS.png" className="rounded-xl lg:h-94 h-30"></img>
                    <img src = "/resources/LAS.png" className="hidden lg:flex  rounded-xl lg:h-94 h-30"></img>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col gap-x-30 2xl:w-4/10 lg:w-69/70 w-90">
                <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10">Industries</h1>
                <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60"> Leaders in your industry, we innovate to deliver exceptional CX globally. Operating as a seamless extension of your brand, we connect and engage behind the scenes to deliver unmatched customer experiences.</p>
                <div className="flex flex-row gap-x-3">
                    <button className="hidden lg:flex 2xl:flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15">&larr;</button>
                    <button className="hidden lg:flex 2xl:flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15">&rarr;</button>
                </div>
            </div>
            <div className="flex flex-row lg:justify-start 2xl:justify-center justify-start gap-x-5">
                    <img src = "/resources/telecom.png" className=" rounded-xl lg:h-70 h-52"></img>
                    <img src = "/resources/shopping.png" className=" rounded-xl lg:h-70 h-52"></img>
                    <img src = "/resources/governance.png" className="hidden lg:flex rounded-xl lg:h-70 h-30"></img>
            </div>
            <div className="flex flex-col gap-y-3 justify-start items-center 2xl:w-4/10 lg:w-69/70 w-90">
                <div className="flex lg:flex-row 2xl:flex-row md:flex-row flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 lg:w-69/70 w-90">
                    <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10 2xl:whitespace-nowrap">Industry Certification & Compliance</h1>
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5">At SPEEEX, we uphold stringent industry benchmarks to safeguard the security, quality, and durability of our services. Our commitment to excellence is reinforced by our compliance with globally recognized certifications accredited by TUV Rheinland GmbH.</p>
                </div>
                <div className="flex flex-row lg:justify-center 2xl:justify-center justify-start lg:gap-x-2 2xl:gap-x-8 gap-x-3">
                    <img src = "/resources/certification.png" className=" 2xl:rounded-md lg:rounded-md rounded-sm lg:flex lg:h-23 2xl:h-24 h-20 2xl:w-50"></img>
                    <img src = "/resources/certification.png" className=" 2xl:rounded-md lg:rounded-md rounded-sm lg:flex lg:h-23 2xl:h-24 h-20 2xl:w-50"></img>
                    <img src = "/resources/certification.png" className=" 2xl:rounded-md lg:rounded-md rounded-sm lg:flex lg:h-23 2xl:h-24 h-20 2xl:w-50"></img>
                    <img src = "/resources/certification.png" className=" hidden lg:flex 2xl:rounded-md lg:rounded-md rounded-sm lg:h-23 2xl:h-24 h-15 2xl:w-50"></img>
                    <img src = "/resources/certification.png" className=" hidden lg:flex 2xl:rounded-md lg:rounded-md rounded-sm lg:h-23 2xl:h-24 h-15 2xl:w-50"></img>
                    <img src = "/resources/certification.png" className=" hidden lg:flex 2xl:rounded-md lg:rounded-md rounded-sm lg:h-23 2xl:h-24 h-15 2xl:w-50"></img>
                </div>
            </div>
        </main>
    );
}
export default ServiceSection;