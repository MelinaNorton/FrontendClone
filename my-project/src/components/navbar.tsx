
const Navbar = () => {
    return(
        //"sm:w-3/6 md:w-full lg:w-7xl 2xl:w-8/12 flex justify-center lg:justify-between items-center h-20 lg:px-50 2xl:px-50 space-x-2 lg:top-2 2xl:top-2 fixed z-50"
        <main>
            <div className="bg-gray-300/13 backdrop-blur-sm lg:h-25 md:h-20 2xl:h-25 h-18 w-screen fixed z-40">
                    <div className="flex flex-col items-center 2xl:gap-7 lg:gap-7 gap-3">
                        <img src = "/resources/Rainbow_Accent.png" className=" h-1 w-full z-0"></img>
                        <div className= "flex flex-row items-center w-[100%vw] 2xl:gap-50 lg:gap-30 gap-25 justify-center">
                            <img src = "/resources/SPEEEX_Logo.png" className="h-5 lg:h-8 2xl:h-8"></img>
                            <div className="flex flex-row 2xl: lg: gap-15">
                                <p className="hidden  lg:flex md:flex space-x-6 text-xs lg:text-lg text-white transition-colors hover:text-white/50 duration-500">About Us</p>
                                <p className="hidden lg:flex md:flex space-x-6 text-xs lg:text-lg text-white hover:text-white/50 duration-500">Services</p>
                                <p className="hidden lg:flex md:flex space-x-6 text-xs lg:text-lg text-white hover:text-white/50 duration-500">Industries</p>
                                <p className="hidden lg:flex  md:flex space-x-6 text-xs lg:text-lg text-white hover:text-white/50 duration-500">Insights</p>
                                <p className="hidden lg:flex md:flex space-x-6 text-xs lg:text-lg text-white hover:text-white/50 duration-500">Contact Us</p>
                            </div>
                            <button className="lg:hidden md:hidden 2xl:hidden flex text-white text-3xl lg:pl-0 pr-0">☰</button>
                            <button className="hidden lg:flex text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 hover:bg-gray-600/50 rounded-4xl text-xs lg:text-lg font-extralight px-6 sm:px-4 py-1 sm:py-2">JOIN US, BE BOLD!</button>
                        </div>
                    </div>
                </div>
        </main>
    );
}
export default Navbar;