import Link from "next/link";
import React from "react";

const HomeSection = () => {
    return (
        
        <main className="bg-[url(/resources/Background_1.png)] bg-cover h-screen flex justify-center items-center relative overflow-x-clip">
            <div className="bg-gray-300/15 grid lg:h-25 md:h-20 h-10 w-full top-0 justify-items-center-safe fixed">
                <img src = "/resources/Rainbow_Accent.png" className=" h-1 w-full z-0"></img>
            </div>
        <div className= "sm:w-3/6 md:w-full lg:w-400 2xl:w-8/12 flex justify-start lg:justify-between items-center h-20 lg:px-50 space-x-2 lg:top-2 top-0 fixed z-50">
          <img src = "/resources/SPEEEX_Logo.png" className="h-5 lg:h-8 sm:h-5 hidden md:flex lg:flex"></img>
          <p className="hidden  lg:flex md:flex space-x-6 text-xs lg:text-lg text-white">About Us</p>
          <Link href="/services" className="hidden lg:flex md:flex space-x-6 text-xs lg:text-lg text-white">Services</Link>
          <p className="hidden lg:flex md:flex space-x-6 text-xs lg:text-lg text-white">Industries</p>
          <p className="hidden lg:flex  md:flex space-x-6 text-xs lg:text-lg text-white">Insights</p>
          <p className="hidden lg:flex md:flex space-x-6 text-xs lg:text-lg text-white">Contact Us</p>
          <button className="lg:hidden md:hidden text-white text-4xl lg:pl-0 pl-60">☰</button>
          <button className="hidden lg:flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-4xl text-xs lg:text-lg font-extralight px-6 sm:px-4 py-1 sm:py-2">JOIN US, BE BOLD!</button>
        </div>
        <div className="absolute md:top-20 md:left-20 left-5 top-10  2xl:top-40 lg:top-30 2xl:left-1/5 lg:left-10 place-content-start z-10">
          <img src="/resources/GPTW.png" className="h-20 lg:h-30 mt-2"></img>
        </div>
      <img src = "/resources/SPEEEX_BG_Rainbow.png" className="justify-self-center absolute top-30 sm:top-50 w-full sm:flex"></img>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="width:100% max-w-5xl px-4">
          <h1 className="font-sans tracking-wider text-white font-semibold lg:text-5xl text-3xl 2xl:text-5xl text-left mt-20 sm:mt-40 pb-5 lg:pt-50 2xl:pt-80">Empowering brands through CX and digital transformation excellence</h1>
          <p className="font-sans tracking-wider text-white font-thin lg:text-lg text-sm text-left pb-2">Founded in 2016 and based in Southeastern Europe, Republic of Kosovo, we specialize in integrating human expertise with AI-driven capabilities via our smart shoring concept. Our innovative approach to customer experience outsourcing ensures unparalleled support for your brand's CX journey.</p>
          <button className=" text-white bg-gradient-to-r from-gray-800/70 to-gray-600/70 rounded-4xl text-xs font-extralight px-6 py-2 tracking-wider lg:text-lg">Learn More</button>
        </div>
        <div className="flex justify-between items-start">

        </div>
        <div className="absolute lg:bottom-0 bottom-30 2xl:bottom-0 md:bottom-0 inset-x-0 flex items-start justify-between width:100% z-20 pl-10">
            <div className="flex flex-col items-start space-y-1">
              <p className=" font-sans tracking-wider text-gray-400 font-thin text-xs text-left hidden lg:flex">CONTACT US</p>
              <img src = "/resources/mail.png" className=" h-12 mt-2 hidden lg:flex"></img>
        </div>
        <div className="flex flex-col items-start justify-between space-x-1 pr-15">
              <p className="font-sans tracking-wider text-gray-400 font-thin lg:text-xs">OUR SUBSIDIARIES</p>
              <div className="flex flex-row space-x-5">
                <img src = "/resources/sub1.png" className="mt-2"></img>
                <img src = "/resources/sub2.png" className="mt-2"></img>
                <img src = "/resources/sub3.png" className="mt-2"></img>
                <img src = "/resources/sub4.png" className="mt-2"></img>
                <img src = "/resources/sub5.png" className="mt-2"></img>
              </div>
            </div>
        </div>
      </div>
    </main>
    );
}
export default HomeSection;