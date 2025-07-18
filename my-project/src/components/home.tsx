import Link from "next/link";
import React from "react";

const HomeSection = () => {
    return (
        <main className="bg-[url(/resources/Background_1.png)] bg-cover min-h-screen justify-end lg:justify-end flex flex-col items-center relative overflow-x-clip">
        <div className="absolute md:top-20 md:left-20 left-5 top-26  2xl:top-40 lg:top-30 2xl:left-4/13 lg:left-10 place-content-start z-10">
          <img src="/resources/GPTW.png" className="h-20 lg:h-30 mt-2"></img>
        </div>
      <img src = "/resources/SPEEEX_BG_Rainbow.png" className="max-w-none absolute 2xl:top-40 lg:top-40 top-40 lg:w-[100vw]  w-[180vw]"></img>
      <div className="z-30 flex-col inset-0 flex justify-center items-center  -red-500 w-screen">
            <div className="p-4 lg:p-6">
              <h1 className="font-sans tracking-wider text-white font-semibold lg:text-5xl md:text-5xl text-3xl 2xl:text-5xl text-left pb-4">Empowering brands through CX and digital transformation excellence</h1>
              <p className="font-sans tracking-wider text-white font-thin 2xl:text-lg lg:text-lg md:text-lg text-sm text-left pb-4">Founded in 2016 and based in Southeastern Europe, Republic of Kosovo, we specialize in integrating human expertise with AI-driven capabilities via our smart shoring concept. Our innovative approach to customer experience outsourcing ensures unparalleled support for your brand's CX journey.</p>
              <button className=" text-white bg-gradient-to-r from-gray-800/70 to-gray-600/70 hover:bg-gray-600/70 hover:cursor-pointer rounded-4xl text-xs font-extralight px-6 py-2 tracking-wider lg:text-lg">LEARN MORE</button>
          </div>
        </div>
        <div className="flex flex-row justify-between w-screen p-4 z-20  -blue-500">
          <div className="hidden lg:flex flex-col items-start space-y-1  -green-500 margin-left:auto">
              <p className=" font-sans tracking-wider text-gray-400 font-thin text-xs text-left">CONTACT US</p>
              <img src = "/resources/mail.png" className=" h-12 mt-2 hidden lg:flex hover:cursor-pointer"></img>
          </div>
            <div className="flex flex-col items-start justify-between space-x-1">
              <p className="font-sans tracking-wider text-gray-400 font-thin lg:text-xs">OUR SUBSIDIARIES</p>
              <div className="flex flex-row 2xl:space-x-2 lg:space-x-5 space-x-2">
                <div className="relative group flex-col gap-y-1">
                  <img src = "/resources/sub1.png" className="mt-2"></img>
                  <p className="absolute opacity-0 transition-opacity group-hover:opacity-100 duration-500 text-xs text-white/50">SPEEX EDUCATION</p>
                </div>
                <div className="relative group flex-col gap-y-1">
                  <img src = "/resources/sub2.png" className="mt-2"></img>
                  <p className="absolute opacity-0 transition-opacity group-hover:opacity-100 duration-500 text-xs text-white/50">SPEEX RHENUM</p>
                </div>
                <div className="relative group flex-col gap-y-1">
                  <img src = "/resources/sub3.png" className="mt-2"></img>
                  <p className="absolute opacity-0 transition-opacity group-hover:opacity-100 duration-500 text-xs text-white/50">SPEEX MEDIENHAUS</p>
                </div>
                <div className="relative group flex-col gap-y-1">
                  <img src = "/resources/sub4.png" className="mt-2"></img>
                  <p className="absolute opacity-0 transition-opacity group-hover:opacity-100 duration-500 text-xs text-white/50">SPEEX ASENDIO</p>
                </div>
                <div className="relative group flex-col gap-y-1">
                  <img src = "/resources/sub5.png" className="mt-2"></img>
                  <p className="absolute opacity-0 transition-opacity group-hover:opacity-100 duration-500 text-xs text-white/50">SPEEX STAFFIFY</p>
                </div>
              </div>
          </div>
        </div>
    </main>
    );
}
export default HomeSection;