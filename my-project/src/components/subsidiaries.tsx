'use client'
import React from 'react'
import { useState } from 'react';
import SubsidiaryImage from "./subsidiary_Image";
import InsightsImage from "./insights_Pic";

const SubsidiariesSection = () => {
    let subsidiaries : string[] = [];
    let insights : string[] = ["insightsImage1", "insightsImage2", "insightsImage3"];
    const [selectedInsight, setSelectedInsight] = useState("1");

    for(let i=0; i<5; i++){
        let temp = "/resources/subsidiary" + (i+1) + ".png";
        subsidiaries.push(temp);
    }

    for(let i=0; i<3; i++){
        let temp = "/resources/" + insights[i] + ".png";
        insights[i] = temp;
    }
    return(
        <main className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-4 justify-start items-center relative overflow-x-clip font-sans">
            <div className="flex lg:flex-row 2xl:flex-row md:flex-row flex-col gap-y-2 gap-x-20 lg:gap-x-55 2xl:gap-x-20 2xl:w-4/10 lg:w-67/70 w-95">
                <div className="flex 2xl:flex-col lg:flex-col flex-col 2xl:gap-5 gap-2">
                    <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10">Our Subsidiaries</h1>
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 ">Strategically diversified into three main sectors, each of which holds a leadership position within their respective industries. Our subsidiaries encompass: Software Engineering, Education, Media and Recruitment all operating under a unified vision of delivering unmatched quality and value. By leveraging our expertise across these sectors, we create synergies that drive innovation, excellence, and customer satisfaction.</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                        <button className="lg:flex 2xl:flex hidden text-white/50 transform-color hover:text-white duration-500 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15 hover:cursor-pointer">&larr;</button>
                        <button className="lg:flex 2xl:flex hidden text-white/50 transform-color hover:text-white duration-500 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15 hover:cursor-pointer">&rarr;</button>
                 </div>
            </div>
            <div className="flex flex-row justify-center gap-x-3 2xl:pr-0 lg:pr-0 pr-8 rounded-md items-end">
                <SubsidiaryImage titleSrc="/resources/MEDIENHAUS.svg" descSrc="/resources/WCDEPL.svg" tagline="Express Creativity" desc="Tailored marketing strategies that generate awareness, engage customers, and drive conversions" lm="LEARN MORE"/>
                <SubsidiaryImage titleSrc="/resources/SPEEXEDUCATION.svg" descSrc="/resources/VJB.svg" tagline="Learn Together" desc="Delivering tailored language and BPO training programs that empower professionals to communicate effectively and excel in global business environments" lm="LEARN MORE"/>
                <SubsidiaryImage titleSrc="/resources/RHENUM.svg" descSrc="/resources/CodeSnippet.svg" tagline="Coding and Beyond" desc="The forefront of technological innovation, offering software development and programming services that cater to the unique needs of businesses" lm="LEARN MORE"/>
            </div>
            <div className="flex flex-row items-start justify-center 2xl:w-10/15 lg:w-300 w-95 2xl:pt-8 lg:pt-8 pt-0">
                <div className="flex flex-col gap-3 2xl:w-9/15 items-start justify-center lg:w-300 w-95">
                    <h1 className="lg:pr-10 tracking-wider lg:text-4xl text-2xl font-bold 2xl:pr-10 pr-8">Insights</h1>
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60">Gain insights into our industry-leading practices and dive deep into our informative publications, including insightful articles, case studies, and industry reports that exemplify our commitment to excellence in BPO services.</p>
                    <div className="flex flex-row 2xl:w-11/19 lg:w-11/19 w-100 items-start gap-3">
                        <button className=" text-white bg-gradient-to-r flex from-gray-600/50 to-gray-700/50 hover:bg-gray-600/50 hover:border-white rounded-4xl text-xs lg:text-lg font-extralight px-4 sm:px-6 py-3 sm:py-2 border-1 border-background hover:cursor-pointer">BLOGS</button>
                        <button className=" text-white bg-gradient-to-r flex from-gray-600/50 to-gray-700/50 hover:bg-gray-600/50 hover:border-white rounded-4xl text-xs lg:whitespace-normal 2xl:whitespace-normal whitespace-nowrap lg:text-lg font-extralight px-4 sm:px-6 py-3 sm:py-2 border-1 border-background hover:cursor-pointer">CASE STUDIES</button>
                        <button className=" text-white bg-gradient-to-r flex from-gray-600/50 to-gray-700/50 hover:bg-gray-600/50 hover:border-white rounded-4xl text-xs lg:whitespace-normal 2xl:whitespace-normal whitespace-nowrap lg:text-lg font-extralight px-4 sm:px-6 py-3 sm:py-2 border-1 border-background hover:cursor-pointer">WHITE PAPERS</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-x-5 2xl:pl-0 lg:pl-95 pl-187">
                {insights.map((src, i) =>(
                    <InsightsImage
                        key={i}
                        bgSrc={src}
                        title="The President of the National Council of Switzerland, Mr. Eric Nussbaumer visits SPEEEX"
                    />
                ))}
            </div>
        </main>
    );
}
export default SubsidiariesSection;