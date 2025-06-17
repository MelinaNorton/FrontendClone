import ServiceImage from "./service_Image";
import IndustryImage from "./industry_Image";
import ICCImage from "./ICC_Image";
import InsightsImage from "./insights_Pic";

const ServiceSection = () => {
    return (
        <main className="bg-black bg-cover flex flex-col lg:gap-y-10 2xl:gap-y-15 gap-y-15 justify-start items-center relative overflow-x-clip font-sans 2xl:pb-10 lg:pb-10 pb-0">
            <div className="flex lg:flex-row 2xl:flex-col md:flex-row flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 2xl:w-4/10 lg:w-66/70 w-95">
                <h1 className="lg:pr-8 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10 lg:whitespace-nowrap">Our Services</h1>
                <div className="flex flex-col lg:w-5xl">
                    <p className="lg:text-xl font-semibold text-white pb-5">End-to-end tech innovation for optimized performance.</p>
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5">Explore new horizons and unleash your full potential. With our comprehensive solution ecosystem, we conceptualize, develop, and manage your future organization to give you a competitive advantage.</p>
                    <button className="flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-4xl text-sm font-extralight lg:px-8 px-2 py-2 lg:py-4 w-30 lg:w-40">LEARN MORE</button>
                </div>
            </div>
            <div className="flex flex-row 2xl:justify-center lg:justify-center justify-start 2xl:pl-0 lg:pl-0 pl-218 lg:gap-x-8 2xl:gap-x-8 gap-x-0 2xl:pb-15 lg:pb-15 pb-0">
                    <ServiceImage src="/resources/DCE.png" number="01" title="Digital Customer Experience" desc="Crafted with deep team expertise and powered by cutting-edge AI applications, our bespoke DCX delivers anticipatory service that consistently exceeds customer expectations." lm="LEARN MORE"/>
                    <ServiceImage src="/resources/Programming.png" number="02" title="Software Engineering Solutions" desc="Levaraging deep team expertise alongside cutting-edge advancements, our custom software solutions anticipate and exceed user expectations with proactive service." lm="LEARN MORE"/>
                    <ServiceImage src="/resources/MDMS.png" number="03" title="Media & Digital Marketing Solutions" desc="Levaraging comprehensive media insights and cutting-edge digital marketing advancements, our solutions anticipate trends and consistently delivery exceptional results." lm="LEARN MORE"/>
                    <ServiceImage src="/resources/LAS.png" number="04" title="Learning as a Service" desc="Our Learning as a service (LaaS) solution significantly accelerates proficiency, enhances learner satisfaction, and boosts knowledge retention" lm="LEARN MORE"/>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col gap-x-30 2xl:w-4/10 lg:w-66/70 w-95">
                <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10">Industries</h1>
                <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60"> Leaders in your industry, we innovate to deliver exceptional CX globally. Operating as a seamless extension of your brand, we connect and engage behind the scenes to deliver unmatched customer experiences.</p>
                <div className="flex flex-row gap-x-3">
                    <button className="hidden lg:flex 2xl:flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15">&larr;</button>
                    <button className="hidden lg:flex 2xl:flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15">&rarr;</button>
                </div>
            </div>
            <div className="flex flex-row lg:justify-start 2xl:justify-center justify-start gap-x-5 2xl:pl-0 lg:pl-0 pl-148 2xl:pb-15 lg:pb-15 pb-0">
                    <IndustryImage src="/resources/telecom.png" title="Telecommunications" desc="Leading the way of Telecommunications" lm="LEARN MORE"/>
                    <IndustryImage src="/resources/shopping.png" title="Retail & E-Commerce" desc="Elevating Shopping Experiences" lm="LEARN MORE"/>
                    <IndustryImage src="/resources/governance.png" title="Government" desc="Empowering Governance Through Efficient Service" lm="LEARN MORE"/>
            </div>
            <div className="flex flex-col gap-y-3 justify-start items-center 2xl:w-4/10 lg:w-69/70 w-90">
                <div className="flex lg:flex-row 2xl:flex-row md:flex-row flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 lg:w-67/70 w-95">
                    <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10 2xl:whitespace-nowrap flex auto lg:basis-2/5">Industry Certification & Compliance</h1>
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5 flex auto lg:basis-3/5">At SPEEEX, we uphold stringent industry benchmarks to safeguard the security, quality, and durability of our services. Our commitment to excellence is reinforced by our compliance with globally recognized certifications accredited by TUV Rheinland GmbH.</p>
                </div>
                <div className="flex flex-row lg:justify-center 2xl:justify-center justify-start items-start lg:gap-x-8 2xl:gap-x-8 gap-x-3 2xl:pl-0 lg:pl-0 pl-73">
                    <ICCImage ICC_Bg="/resources/cert_rec.png" ICCSrc="/resources/cert_text_1.svg"></ICCImage>
                    <ICCImage ICC_Bg="/resources/cert_rec.png" ICCSrc="/resources/cert_text_1.svg"></ICCImage>
                    <ICCImage ICC_Bg="/resources/cert_rec.png" ICCSrc="/resources/cert_text_1.svg"></ICCImage>
                    <ICCImage ICC_Bg="/resources/cert_rec.png" ICCSrc="/resources/cert_text_1.svg"></ICCImage>
                    <ICCImage ICC_Bg="/resources/cert_rec.png" ICCSrc="/resources/cert_text_1.svg"></ICCImage>
                    <ICCImage ICC_Bg="/resources/cert_rec.png" ICCSrc="/resources/cert_text_1.svg"></ICCImage>
                </div>
            </div>
        </main>
    );
}
export default ServiceSection;