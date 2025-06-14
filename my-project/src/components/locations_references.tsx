const LocationsSection = () => {
    let firstClients : string[] = [];
    let secondClients : string[] = [];
    let localClients : string[] = [];

    for(let i=0; i<12; i++){
        if(i<6){
            let temp = "/resources/client" + (i+1) + ".png";
            firstClients.push(temp);
        }
        else if(i>=6){
            let temp = "/resources/client" + (i+1) + ".png";
            secondClients.push(temp);
        }
    }

    for(let i=0; i<6; i++){
        let temp ="/resources/localclient" + (i+1) + ".png";
        localClients.push(temp);
    }

    return(
        <main className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans p-5">
            <div className="flex lg:flex-row 2xl:flex-col md:flex-row flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 2xl:w-4/10 lg:w-69/70 w-90">
                <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10">Our Locations</h1>
                <div className="flex 2xl:flex-row lg:flex-row flex-col 2xl:gap-25 lg:gap-10">
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5">Strategically situated in the Republic of Kosova, South Eastern Europe, our location offers unparalleled advantages for companies seeking to optimize their operations through outsourcing. With a robust infrastructure and a skilled workforce, partnering with us enables businesses to capitalize on cost-effectiveness, access to a talented labor pool, and strategic geographic positioning for enhanced market reach in Europe and beyond.</p>
                    <div className="flex flex-row gap-3">
                        <button className="2xl:flex lg:flex hidden text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15">&larr;</button>
                        <button className="2xl:flex lg:flex hidden text-white bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15">&rarr;</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-x-8">
                <img src = "/resources/Location1.png" className=" rounded-xl lg:h-94 h-30 2xl:h-150"></img>
                <img src = "/resources/Location2.png" className="rounded-xl lg:h-94 h-40 2xl:h-150"></img>
                <img src = "/resources/Location3.png" className="rounded-xl lg:h-94 h-30 2xl:h-150"></img>
            </div>
            <div className="flex lg:flex-row 2xl:flex-col md:flex-row flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 2xl:w-4/10 lg:w-69/70 w-90">
                <h1 className="lg:pr-10 lg:text-4xl text-xl font-bold 2xl:pr-10 pr-10">References</h1>
                <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5"> Our dedication to achieving excellence is underscored by the accomplishments of our esteemed clientele. We have been privileged to provide services to a multitude of businesses across diverse industries and global markets, and we are gratified to have secured their trust and confidence.</p>
            </div>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-start items-start">
                        <p className="self-start tracking-widest text-indigo-200 font-semibold">International Clients</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row lg:justify-center 2xl:justify-center justify-start gap-x-4">
                            {firstClients.map( (src,i) =>(
                                <img
                                    key={i}
                                    src={src}
                                    className="rounded-sm 2xl:h-22 lg:h-18 h-20"
                                />
                            ))}
                        </div>
                        <div className="flex-row justify-center gap-x-4 2xl:flex lg:flex hidden">
                            {secondClients.map( (src, i) =>(
                                <img
                                    key={i}
                                    src={src}
                                    className=" rounded-sm 2xl:h-22 lg:h-18 h-20"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row 2xl:gap-86 lg:gap-67 gap-23">
                        <p className="self-start tracking-widest text-indigo-200 font-semibold">Local Clients</p>
                        <p className="self-start tracking-widest text-indigo-200 font-semibold">Local Partners</p>
                    </div>
                    <div className="flex flex-row lg:justify-center 2xl:justify-center justify-start gap-x-4">
                        {localClients.map((src,i) => (
                            <img
                            key={i}
                            src={src}
                            className="rounded-b-sm 2xl:h-22 lg:h-18 h-20"
                            />
                        ))}
                    </div>
                </div>
        </main>
    );
}
export default LocationsSection;