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
        <main className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans p-5">
            <div className="flex lg:flex-col 2xl:flex-col md:flex-col flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 2xl:w-4/10 lg:w-67/70 md:w-70/70 w-95">
                <h1 className="lg:pr-10 lg:text-4xl md:text-3xl text-xl font-bold 2xl:pr-10 pr-12 2xl:pb-2 lg:pb-2 pb-0">Our Locations</h1>
                <div className="flex 2xl:flex-row lg:flex-row flex-col 2xl:gap-25 lg:gap-10">
                    <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5">Strategically situated in the Republic of Kosova, South Eastern Europe, our location offers unparalleled advantages for companies seeking to optimize their operations through outsourcing. With a robust infrastructure and a skilled workforce, partnering with us enables businesses to capitalize on cost-effectiveness, access to a talented labor pool, and strategic geographic positioning for enhanced market reach in Europe and beyond.</p>
                    <div className="flex flex-row gap-3">
                        <button className="2xl:flex lg:flex hidden transition-colors hover:text-white duration-500 text-white/50 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15 hover:cursor-pointer">&larr;</button>
                        <button className="2xl:flex lg:flex hidden transition-colors hover:text-white duration-500 text-white/50 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full text-xl font-extralight lg:px-8 justify-center px-4 py-2 lg:py-4 w-15 lg:h-15 2xl:h-15 h-15 hover:cursor-pointer">&rarr;</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-x-8 2xl:pr-0 lg:pr-0 md:pr-30 pr-8">
                <img src = "/resources/Location1.png" className=" rounded-xl lg:h-94 h-30 2xl:h-150 2xl:flex lg:flex md:hidden flex"></img>
                <LocationPic bgSrc="/resources/BlankLocation2.png" title="Prishtina Headquarters" desc="Located in the heart of Prishtina, the SPEEEX HQ presents the most preeminent offices, equipped with the latest technological advancements and modern amenities. Along with its astonishing voew of the city, this facility is a marvel of work environment." lm="LEARN MORE"/>
                <img src = "/resources/Location3.png" className="rounded-xl lg:h-94 h-30 2xl:h-150 2xl:flex lg:flex md:hidden flex"></img>
            </div>
            <div className="flex lg:flex-row 2xl:flex-col md:flex-col flex-col gap-y-2 gap-x-20 lg:gap-x-10 2xl:gap-x-20 2xl:w-4/10 lg:w-69/70 md:w-70/70 w-95 2xl:pt-15 lg:pt-15 md:pt-25 pt-0">
                <h1 className="lg:pr-10 lg:text-4xl md:text-3xl text-xl font-bold 2xl:pr-10 pr-10">References</h1>
                <p className="lg:text-lg 2xl:text-md text-sm font-extralight text-white/60 pb-5"> Our dedication to achieving excellence is underscored by the accomplishments of our esteemed clientele. We have been privileged to provide services to a multitude of businesses across diverse industries and global markets, and we are gratified to have secured their trust and confidence.</p>
            </div>
                <div className="flex flex-col gap-3">
                    <div className="flex justify-start items-start 2xl:pl-0 lg:pl-2 md:pl-175 pl-118">
                        <p className="self-start tracking-widest text-indigo-200 font-semibold">International Clients</p>
                    </div>
                    <div className="flex flex-col 2xl:gap-4 lg:gap-2 gap-2 2xl:pl-0 lg:pl-0 pl-10">
                        <div className="flex flex-row lg:justify-center 2xl:justify-center md:justify-start 2xl:pl-0 lg:pl-0 md:pl-90 pl-0 justify-start 2xl:gap-x-4 lg:gap-x-2 gap-x-4">
                            {firstClients.map( (src,i) =>(
                                <ClientImage
                                    key={i}
                                    logoSrc={src}
                                    bgSrc="/resources/cert_rec.png"
                                />
                            ))}
                        </div>
                        <div className="flex-row justify-center 2xl:gap-x-4 lg:gap-x-2 gap-x-2 2xl:flex lg:flex hidden">
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
                <div className="flex flex-col gap-3 2xl:pl-0 lg:pl-0 pl-10">
                    <div className="flex flex-row justify-start 2xl:pl-0 lg:pl-0 md:pl-90 pl-0 2xl:gap-86 lg:gap-70 gap-80">
                        <p className="self-start tracking-widest text-indigo-200 font-semibold 2xl:pl-2 lg:pl-2 pl-55 md:pl-0">Local Clients</p>
                        <p className="self-start tracking-widest text-indigo-200 font-semibold 2xl:flex lg:flex md:hidden hidden">International Partners</p>
                    </div>
                    <div className="flex 2xl:flex-row lg:flex-row md:flex-col flex-col gap-y-4">
                        <div className="flex flex-row lg:justify-center 2xl:justify-center justify-start 2xl:gap-x-4 lg:gap-x-2 gap-x-4 2xl:pl-0 lg:pl-0 md:pl-90 pl-54 2xl:pr-4 lg:pr-2">
                            {localClients.map((src,i) => (
                                <ClientImage
                                    key={i}
                                    logoSrc={src}
                                    bgSrc="/resources/cert_rec.png"
                                    />
                                ))}
                        </div>
                        <p className="self-start tracking-widest text-indigo-200 font-semibold 2xl:hidden lg:hidden md:flex flex md:pl-90 pl-55">International Partners</p>
                        <div className="flex flex-row lg:justify-center 2xl:justify-center justify-start 2xl:gap-x-4 lg:gap-x-2 gap-x-4 2xl:pl-0 lg:pl-0 md:pl-90 pl-0">
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