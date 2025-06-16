import SubsidiaryImage from "./subsidiary_Image";

const SubsidiariesSection = () => {
    let subsidiaries : string[] = [];
    let insights : string[] = [];

    for(let i=0; i<5; i++){
        let temp = "/resources/subsidiary" + (i+1) + ".png";
        subsidiaries.push(temp);
    }

    for(let i=0; i<4; i++){
        let temp = "/resources/insights" + (i+1) + ".jpg";
        insights.push(temp);
    }
    return(
        <main className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans">
            <div className="flex lg:flex-row 2xl:flex-row md:flex-row flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 2xl:w-4/10 lg:w-67/70 w-95">
                <div className="flex 2xl:flex-col lg:flex-row flex-col 2xl:gap-5 gap-2">
                    <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10">Our Subsidiaries</h1>
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 ">Strategically diversified into three main sectors, each of which holds a leadership position within their respective industries. Our subsidiaries encompass: Software Engineering, Education, Media and Recruitment all operating under a unified vision of delivering unmatched quality and value. By leveraging our expertise across these sectors, we create synergies that drive innovation, excellence, and customer satisfaction.</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                        <button className="lg:flex 2xl:flex hidden text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15">&larr;</button>
                        <button className="lg:flex 2xl:flex hidden text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15">&rarr;</button>
                 </div>
            </div>
            <div className="flex flex-row justify-center gap-x-8 2xl:pr-0 lg:pr-0 pr-8">
                <SubsidiaryImage titleSrc="/resources/MEDIENHAUS.svg" descSrc="/resources/WCDEPL.svg" tagline="Express Creativity" desc="Tailored marketing strategies that generate awareness, engage customers, and drive conversions" lm="LEARN MORE"/>
                <SubsidiaryImage titleSrc="/resources/SPEEXEDUCATION.svg" descSrc="/resources/VJB.svg" tagline="Learn Together" desc="Delivering tailored language and BPO training programs that empower professionals to communicate effectively and excel in global business environments" lm="LEARN MORE"/>
                <SubsidiaryImage titleSrc="/resources/RHENUM.svg" descSrc="/resources/CodeSnippet.svg" tagline="Coding and Beyond" desc="The forefront of technological innovation, offering software development and programming services that cater to the unique needs of businesses" lm="LEARN MORE"/>
            </div>
            <div className="flex flex-row items-start justify-center 2xl:w-10/15 lg:w-300 w-95">
                <div className="flex flex-col gap-3 2xl:w-9/15 items-start justify-center lg:w-300 w-95">
                    <h1 className="lg:pr-10 tracking-wider lg:text-4xl text-2xl font-bold 2xl:pr-10 pr-8">Insights</h1>
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60">Gain insights into our industry-leading practices and dive deep into our informative publications, including insightful articles, case studies, and industry reports that exemplify our commitment to excellence in BPO services.</p>
                    <div className="flex flex-row 2xl:w-11/19 items-start gap-3">
                        <button className=" text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-4xl text-xs lg:text-lg font-extralight px-6 sm:px-4 py-1 sm:py-2">BLOGS</button>
                        <button className=" text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-4xl text-xs lg:whitespace-normal 2xl:whitespace-normal whitespace-nowrap lg:text-lg font-extralight px-6 sm:px-4 py-1 sm:py-2">CASE STUDIES</button>
                        <button className=" text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-4xl text-xs lg:whitespace-normal 2xl:whitespace-normal whitespace-nowrap lg:text-lg font-extralight px-6 sm:px-4 py-1 sm:py-2">WHITE PAPERS</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-x-5 2xl:pl-0 lg:pl-0 pl-90">
                {insights.map((src, i) =>(
                    <img
                        key={i}
                        src={src}
                        className="flex-none rounded-lg lg:h-90 2xl:h-110 h-50 2xl:w-160 w-90 lg:w-130"
                    />
                ))}
            </div>
        </main>
    );
}
export default SubsidiariesSection;