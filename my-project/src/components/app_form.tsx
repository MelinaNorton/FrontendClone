'use client'
import DropdownMenu from "./dropdown";
import OpenPosition from "./openPositions";
import { useState } from "react";
import TextInput from "./textInput";
import UploadButton from "./uploadDoc";
import CheckBox from "./checkbox";

const AppForm = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [isHidden, setIsHidden] = useState(true);
    return(
        <div className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans p-4">
            <div className="relative flex flex-row w-full 2xl:w-3/7 justify-end items-center">
                <DropdownMenu label="" dd_icon="▼" dd_icon_up="▲" dd_num={5} dd_text={['Albanian','German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['albanianflag.jpg','germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon=""/>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7 overflow-clip">
                <div className="flex flex-col items-start justify-center space-y-2">
                    <h1 className="text-white text-3xl tracking-wider font-bold">Open Jobs</h1>
                    <p className="text-white/50 text-md tracking-wider">What position are you applying for?</p>
                    <OpenPosition title="Customer Care Advisor" icon="⌄" isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Languages</h1>
                    <p className="text-white/50 text-md tracking-wider">What language are you applying for?</p>
                    <div className="flex lg:flex-row flex-col justify-start items-start w-full lg:justify-between lg:items-start space-y-10">
                        <DropdownMenu label="What language are you applying for?" dd_icon="▼" dd_icon_up="▲" dd_num={4} dd_text={['German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon=""/>
                        <DropdownMenu label="What language level are you at?" dd_icon="▼" dd_icon_up="▲" dd_num={6} dd_text={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']} hidden={isHidden} dd_icons={['', '', '', '', '', '']} button_icon=""/>
                        <DropdownMenu label="Do you speak any other languages?(optional)" dd_icon="▼" dd_icon_up="▲" dd_num={5} dd_text={['German','Italian', 'French', 'English', 'Ukranian']} hidden={isHidden} dd_icons={['', '', '', '', '', '']} button_icon=""/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-start justify-center space-y-2 w-full">
                        <h1 className="text-white text-2xl tracking-wider font-bold">Locations</h1>
                    </div>
                    <div className="flex flex-col w-full justify-start items-start">
                            <DropdownMenu label="Your preferred location to work?" dd_icon="▼" dd_icon_up="▲" dd_num={4} dd_text={['Prishtine HQ', 'Vushtrri', 'Ferizaj', 'Prizren']} hidden={isHidden} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon=""/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col items-start justify-center space-y-8 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Personal data</h1>
                    <div className="flex lg:flex-row flex-col justify-start w-full md:justify-between space-y-10">
                        <TextInput label="Name" required={true} isDatePicker={false}/>
                        <TextInput label="Surname" required={true} isDatePicker={false}/>
                        <TextInput label="Birthdate" required={true} isDatePicker={true}/>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-start w-full  md:justify-between space-y-10">
                        <TextInput label="Identification Number" required={true} isDatePicker={false}/>
                        <TextInput label="Residence" required={true} isDatePicker={false}/>
                        <DropdownMenu label="Diaspora?" dd_icon="▼" dd_icon_up="▲" dd_num={2} dd_text={['true', 'false']} hidden={isHidden} dd_icons={['', '']} button_icon=""/>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-start md:justify-start w-full 2xl:w-3/7 space-x-20 2xl:space-x-17 space-y-10">
                        <TextInput label="Phone Number" required={true} isDatePicker={false}/>
                        <TextInput label="Email" required={true} isDatePicker={false}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start w-full 2xl:w-3/7">
                <div className="flex flex-col md:flex-row justify-start items-start w-full space-x-10">
                    <UploadButton isRequired={true} title="Send your CV" label="Upload Document" upload_icon="paperclip.svg"/>
                    <div className="flex flex-col">
                        <p className="text-white text-sm tracking-wider">No documents uploaded!</p>
                        <p className="text-white text-sm tracking-wider"> The maximum size of the document allowed is 25mb. Allowed types: .pdf, .doc, .docx.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start w-full 2xl:w-3/7 space-x-5">
                <CheckBox label=""/>
                <p className="text-white text-md tracking-wider text-start">I agree to the terms of service *</p>
            </div>
            <div className="flex flex-col w-full items-start justify-center">
                <UploadButton isRequired={false} label="SUBMIT APPLICATION" upload_icon="" title=""/>
            </div>
        </div>
    );
}
export default AppForm;