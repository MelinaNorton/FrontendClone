
export default function Home(){
  return(
    <main className="bg-[url(/resources/Background_1.png)] bg-cover h-screen flex justify-center items-center relative overflow-x-clip overflow-y-scroll">
      <img src = "/resources/Rainbow_Accent.png" className="absolute top-0 h-1 width:100% z-0"></img>
      <div className=" absolute w-screen top-1 flex flex-col items-start z-10 pl-5 pr-5">
        <div className= "w-full  bg-indigo-950 flex justify-between items-center h-12 px-4">
          <img src = "/resources/SPEEEX_Logo.png" className="h-5 sm:h-5"></img>
          <p className="hidden lg:flex space-x-6 text-xs text-white">About Us</p>
          <p className="hidden lg:flex space-x-6 text-xs text-white">Services</p>
          <p className="hidden lg:flex space-x-6 text-xs text-white">Industries</p>
          <p className="hidden lg:flex space-x-6 text-xs text-white">Insights</p>
          <p className="hidden lg:flex space-x-6 text-xs text-white">Contact Us</p>
          <button className="block lg:hidden p-2 text-white">☰</button>
          <button className="ml-40 text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-4xl text-xs font-extralight px-6 sm:px-4 py-1 sm:py-2 ">JOIN US, BE BOLD!</button>
        </div>
        <div>
          <img src="/resources/GPTW.png" className="h-25 mt-2 justify-self-start"></img>
        </div>
      </div>
      <img src = "/resources/SPEEEX_BG_Rainbow.png" className="justify-self-center width:100%"></img>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="width:100% max-w-3xl px-4">
          <h1 className="font-sans tracking-wider text-white font-semibold text-3xl sm:text-3xl text-left mt-20 sm:mt-40">Empowering brands through CX and digital transformation excellence</h1>
          <p className="font-sans tracking-wider text-white font-thin text-sm text-left pb-2">Founded in 2016 and based in Southeastern Europe, Republic of Kosovo, we specialize in integrating human expertise with AI-driven capabilities via our smart shoring concept. Our innovative approach to customer experience outsourcing ensures unparalleled support for your brand's CX journey.</p>
          <button className=" text-white bg-gradient-to-r from-gray-800/70 to-gray-600/70 rounded-4xl text-xs font-extralight px-4 py-2">Learn More</button>
        </div>
        <div className="flex justify-between items-start">

        </div>
        <div className="absolute bottom-20 inset-x-0 flex items-start justify-between width:100% z-20">
            <div className="flex flex-col items-start space-y-1">
              <p className=" font-sans tracking-wider text-gray-400 font-thin text-xs text-left">CONTACT US</p>
              <img src = "/resources/mail.png" className=" h-12 mt-2"></img>
        </div>
        <div className="flex flex-col items-end justify-between space-x-1">
              <p className="font-sans tracking-wider text-gray-400 font-thin text-xs text-left-20">OUR SUBSIDIARIES</p>
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