import ClientImage from "./clients_Image";
import LocationPic from "./locations";

const LocationsSection = () => {
    let firstClients : string[] = ["sunrise", "yallo", "lebara", "liberty_global", "upc", "swype"];
    let secondClients : string[] = ["mobilezone", "condair", "check24", "speeex", "alysian", "mobilezone"];
    let localClients : string[] = ["prishtinamall", "procredit"];
    let intPartners : string[] = ["SEC", "europeanbank", "usaid", "helvetas"];

    for(let i=0; i<12; i++){
        if(i<6){
            let temp = "/resources/" + firstClients[i] + ".svg";
            firstClients[i]=temp;
            console.log(temp);
        }
        else if(i>=6){
            let temp = "/resources/" + secondClients[i-6] + ".svg";
            secondClients[i-6]=temp;
        }
    }

    for(let i=0; i<2; i++){
        let temp ="/resources/localclient" + (i+1) + ".png";
        localClients[i] = temp;
    }

    for(let i=2; i<6; i++){
        let temp ="/resources/localclient" + (i+1) + ".png";
        intPartners[i-2] = temp;
    }

    return(
        <main className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans p-4">
            <div className="flex md:flex-col flex-col gap-y-2 gap-x-20 lg:gap-x-10 w-full 2xl:w-[40vw] border border-red-500">
                <h1 className="lg:pr-10 lg:text-4xl md:text-3xl text-xl font-bold pb-2">Our Locations</h1>
                <div className="flex 2xl:flex-row lg:flex-row flex-col 2xl:gap-25 lg:gap-10">
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5">Strategically situated in the Republic of Kosova, South Eastern Europe, our location offers unparalleled advantages for companies seeking to optimize their operations through outsourcing. With a robust infrastructure and a skilled workforce, partnering with us enables businesses to capitalize on cost-effectiveness, access to a talented labor pool, and strategic geographic positioning for enhanced market reach in Europe and beyond.</p>
                    <div className="flex flex-row gap-3">
                        <button className="2xl:flex lg:flex hidden transition-colors hover:text-white duration-500 text-white/50 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15 hover:cursor-pointer">&larr;</button>
                        <button className="2xl:flex lg:flex hidden transition-colors hover:text-white duration-500 text-white/50 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15 hover:cursor-pointer">&rarr;</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-8 w-screen lg:w-full border border-red-500">
                <img src = "/resources/Location1.png" className=" rounded-xl lg:h-94 h-30 2xl:h-150 2xl:flex lg:flex hidden"></img>
                <LocationPic bgSrc="/resources/BlankLocation2.png" title="Prishtina Headquarters" desc="Located in the heart of Prishtina, the SPEEEX HQ presents the most preeminent offices, equipped with the latest technological advancements and modern amenities. Along with its astonishing voew of the city, this facility is a marvel of work environment." lm="LEARN MORE"/>
                <img src = "/resources/Location3.png" className=" rounded-xl lg:h-94 h-30 2xl:h-150 2xl:flex lg:flex hidden"></img>
            </div>
            <div className="flex lg:flex-row 2xl:flex-col md:flex-col flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 w-full 2xl:w-[40vw]">
                <h1 className="lg:pr-10 lg:text-4xl md:text-3xl text-xl font-bold">References</h1>
                <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5"> Our dedication to achieving excellence is underscored by the accomplishments of our esteemed clientele. We have been privileged to provide services to a multitude of businesses across diverse industries and global markets, and we are gratified to have secured their trust and confidence.</p>
            </div>
                <div className="flex flex-col gap-3 border border-red-500 justify-center items-start w-full 2xl:justify-center 2xl:items-center">
                    <div className="flex justify-start items-start 2xl:w-[39vw]">
                        <p className="self-start tracking-widest text-indigo-200 font-semibold">International Clients</p>
                    </div>
                    <div className="flex flex-col 2xl:gap-4 2 gap-2 border border-green-500">
                        <div className="flex flex-row lg:justify-center justify-start 2xl:gap-x-4 lg:gap-x-2 gap-x-4">
                            {firstClients.map( (src,i) =>(
                                <ClientImage
                                    key={i}
                                    logoSrc={src}
                                    bgSrc="/resources/cert_rec.png"
                                />
                            ))}
                        </div>
                        <div className="flex-row justify-center 2xl:gap-x-4 gap-x-2 2xl:flex lg:flex hidden border border-blue-500">
                            {secondClients.map( (src, i) =>(
                                <ClientImage
                                    key={i}
                                    logoSrc={src}
                                    bgSrc="/resources/cert_rec.png"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 border border-red-500 justify-center items-start w-full 2xl:items-center">
                    <div className="flex flex-row justify-start 2xl:gap-86 lg:gap-70 gap-80 2xl:w-[39vw]">
                        <p className="self-start tracking-widest text-indigo-200 font-semibold">Local Clients</p>
                        <p className="self-start tracking-widest text-indigo-200 font-semibold 2xl:flex lg:flex md:hidden hidden">International Partners</p>
                    </div>
                    <div className="flex flex-col lg:flex-row 2xl:gap-4 2 gap-2 border border-green-500 max-w-none w-max">
                        <div className="flex flex-row 2xl:justify-center justify-start 2xl:gap-x-4 lg:gap-x-2 gap-x-4 pr-2">
                            {localClients.map((src,i) => (
                                <ClientImage
                                    key={i}
                                    logoSrc={src}
                                    bgSrc="/resources/cert_rec.png"
                                    />
                                ))}
                        </div>
                        <p className="self-start tracking-widest text-indigo-200 font-semibold lg:hidden">International Partners</p>
                        <div className="flex flex-row justify-start 2xl:gap-x-4 lg:gap-x-2 gap-x-4">
                            {intPartners.map((src,i) => (
                                <ClientImage
                                    key={i}
                                    logoSrc={src}
                                    bgSrc="/resources/cert_rec.png"
                                    />
                                ))}
                        </div>
                    </div>
                </div>
        </main>
    );
}
export default LocationsSection;