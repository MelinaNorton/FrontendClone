const ApplyMeet = () => {
    return(
        <main className="bg-black 2xl:bg-[url('/resources/ApplyMeet.png')] lg:bg-[url('/resources/ApplyMeet.png')] bg-cover 2xl:h-screen lg:h-screen h-[50vh] flex flex-col justify-center items-center relative overflow-x-clip font-sans 2xl:pb-0 lg:pb-0">
            <img src="/resources/ApplyMeet.png" className="absolute 2xl:hidden lg:hidden h-70 w-[150%vw]"></img>
            <div className="flex 2xl:flex-row lg:flex-row flex-col gap-4">
                <div className="group flex items-center rounded-2xl 2xl:justify-end lg:justify-end justify-center 2xl:w-90 lg:w-70 w-70 backdrop-blur-sm bg-purple-950/20 hover:backdrop-blur-2xl duration-1000">
                    <div className="flex flex-col p-4">
                        <h1 className="font-bold text-indigo-300 2xl:text-2xl lg:text-2xl 2xl:text-right lg:text-right text-center group-hover:text-white duration-500">APPLY FOR JOB</h1>
                        <p className="text-right">JOIN US, BE BOLD!</p>
                    </div>
                </div>
                <div className="group flex items-center rounded-2xl 2xl:justify-start lg:justify-start justify-center 2xl:w-90 backdrop-blur-sm bg-purple-950/20 hover:backdrop-blur-2xl duration-1000">
                    <div className="flex flex-col p-4">
                        <h1 className="font-bold text-emerald-300 2xl:text-2xl lg:text-2xl 2xl:text-right lg:text-left text-center group-hover:text-white duration-500">BUSINESS MEETING</h1>
                        <p className="2xl:text-left lg:text-left">SCHEDULE A MEETING!</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ApplyMeet;
