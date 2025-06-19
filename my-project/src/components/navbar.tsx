'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter();
    return(
        //"sm:w-3/6 md:w-full lg:w-7xl 2xl:w-8/12 flex justify-center lg:justify-between items-center h-20 lg:px-50 2xl:px-50 space-x-2 lg:top-2 2xl:top-2 fixed z-50"
        <main>
            <div className="flex flex-col bg-gray-300/13 backdrop-blur-sm lg:h-25 md:h-17 2xl:h-25 h-18 w-screen fixed z-40 justify-center items-center">
                    <img src = "/resources/Rainbow_Accent.png" className="absolute top-0 w-full z-0"></img>
                        <div className= "flex flex-row items-center justify-between lg:justify-between w-screen lg:pr-6 2xl:w-[40vw] w-full">
                                <img src = "/resources/SPEEEX_Logo.png" className="h-5 lg:h-8 2xl:h-8 absolute lg:relative lg:flex pl-0 lg:pl-2"></img>
                            <div className="hidden lg:flex flex-row justify-between items-center 2xl:w-2xl lg:w-xl w-2xl">
                                <p className="hidden  lg:flex md:hidden text-xs lg:text-lg text-white transition-colors hover:text-white/50 duration-500 hover:cursor-pointer whitespace-nowrap">About Us</p>
                                <p className="hidden lg:flex md:hidden text-xs lg:text-lg text-white hover:text-white/50 duration-500 hover:cursor-pointer">Services</p>
                                <p className="hidden lg:flex md:hidden text-xs lg:text-lg text-white hover:text-white/50 duration-500 hover:cursor-pointer">Industries</p>
                                <p className="hidden lg:flex  md:hidden text-xs lg:text-lg text-white hover:text-white/50 duration-500 hover:cursor-pointer">Insights</p>
                                <p className="hidden lg:flex md:hidden text-xs lg:text-lg text-white hover:text-white/50 duration-500 hover:cursor-pointer whitespace-nowrap">Contact Us</p>
                            </div>
                            <button className="lg:hidden absolute text-white text-3xl hover:cursor-pointer right-6">☰</button>
                            <button className="hidden lg:flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 hover:bg-gray-600/50 rounded-4xl lg:text-lg font-extralight hover:cursor-pointer" onClick={ ()=> router.push('./application')}>JOIN US, BE BOLD!</button>
                            </div>
                </div>
        </main>
    );
}
export default Navbar;