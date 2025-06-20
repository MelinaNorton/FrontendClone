'use client'
import DropdownMenu from "./dropdown";
import OpenPosition from "./openPositions";
import { useState } from "react";
import TextInput from "./textInput";

const AppForm = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [isHidden, setIsHidden] = useState(true);
    return(
        <div className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans p-4">
            <div className="relative flex flex-row w-full justify-end items-center border border-red-500">
                <DropdownMenu label="" dd_icon="▼" dd_num={5} dd_text={['Albanian','German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['albanianflag.jpg','germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon=""/>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full border border-red-500 overflow-clip">
                <div className="flex flex-col items-start justify-center space-y-2">
                    <h1 className="text-white text-3xl tracking-wider font-bold">Open Jobs</h1>
                    <p className="text-white/50 text-md tracking-wider">What position are you applying for?</p>
                    <OpenPosition title="Customer Care Advisor" icon="⌄" isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full border border-red-500">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Languages</h1>
                    <p className="text-white/50 text-md tracking-wider">What language are you applying for?</p>
                    <div className="flex md:flex-row flex-col justify-start items-end w-full md:justify-between border border-green-500">
                        <DropdownMenu label="What language are you applying for?" dd_icon="▼" dd_num={4} dd_text={['German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon=""/>
                        <DropdownMenu label="What language level are you at?" dd_icon="▼" dd_num={6} dd_text={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']} hidden={isHidden} dd_icons={['', '', '', '', '', '']} button_icon=""/>
                        <DropdownMenu label="Do you speak any other languages?(optional)" dd_icon="▼" dd_num={5} dd_text={['German','Italian', 'French', 'English', 'Ukranian']} hidden={isHidden} dd_icons={['', '', '', '', '', '']} button_icon=""/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full border border-red-500">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-start justify-center space-y-2 w-full">
                        <h1 className="text-white text-2xl tracking-wider font-bold">Locations</h1>
                    </div>
                    <div className="flex flex-col w-full justify-start items-start border border-green-500">
                            <DropdownMenu label="Your preferred location to work?" dd_icon="▼" dd_num={4} dd_text={['Prishtine HQ', 'Vushtrri', 'Ferizaj', 'Prizren']} hidden={isHidden} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon=""/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full border border-red-500">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Personal data</h1>
                    <div className="flex md:flex-row flex-col justify-start w-full md:justify-between border border-green-500">
                        <TextInput label="Name" required={true} isDatePicker={false}/>
                        <TextInput label="Surname" required={true} isDatePicker={false}/>
                        <TextInput label="Birthdate" required={true} isDatePicker={true}/>
                    </div>
                    <div className="flex md:flex-row flex-col justify-start w-full md:justify-between border border-green-500">
                        <TextInput label="Identification Number" required={true} isDatePicker={false}/>
                        <TextInput label="Residence" required={true} isDatePicker={false}/>
                        <DropdownMenu label="Diaspora?" dd_icon="▼" dd_num={2} dd_text={['true', 'false']} hidden={isHidden} dd_icons={['', '']} button_icon=""/>
                    </div>
                    <div className="flex md:flex-row flex-col justify-start w-full space-x-20 border border-green-500">
                        <TextInput label="Phone Number" required={true} isDatePicker={false}/>
                        <TextInput label="Email" required={true} isDatePicker={false}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AppForm;