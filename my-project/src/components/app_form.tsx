'use client'
import DropdownMenu from "./dropdown";
import OpenPosition from "./openPositions";
import { useState } from "react";
import TextInput from "./textInput";
import UploadButton from "./uploadDoc";
import CheckBox from "./checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import { Controller } from "react-hook-form";
import { TextInputSchema } from "@/schemas/textInputSchema";

export type applicationInputs = {
    name : string,
    surname : string,
    language : string,
    appliedLang : string,
    level : string,
    xtraLang : string,
    location :string,
    diaspora : string,
    birthday : string,
    idnum : string,
    residence : string,
    phonenum : string,
    email : string,
    checked : boolean,
    uploaded : boolean
}

const AppForm = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [isHidden, setIsHidden] = useState(true);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm<applicationInputs>({
        resolver: yupResolver(TextInputSchema),
        defaultValues: {
            name: '',
            surname: '',
            language: '',
            appliedLang: '',
            xtraLang: '',
            location: '',
            diaspora: '',
            birthday: '',
            idnum: '',
            residence: '',
            phonenum: '',
            email: '',
            checked: false,
            uploaded: false
        },
    });

    const onSubmit: SubmitHandler<applicationInputs> = (data) => {
        console.log(data.name)
        console.log(data.surname)
        console.log(data.language)
        console.log(data.appliedLang)
        console.log(data.xtraLang)
        console.log(data.location)
        console.log(data.diaspora)
        console.log(data.birthday)
        console.log(data.idnum)
        console.log(data.residence)
        console.log(data.phonenum)
        console.log(data.email)
        console.log(data.checked)
        console.log(data.email)
        reset()
    }

    return(

        <form onSubmit={handleSubmit(onSubmit)} className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans p-4">
            <div className="relative flex flex-row w-full 2xl:w-3/7 justify-end items-center">
                <Controller
                name="language"
                control={control}
                render = {({field}) =>(
                    <div className="flex flex-col space-y-2">
                        {errors.language && <p className="text-white text-md tracking-wider font-bold">Required Field</p>}
                        <DropdownMenu label="" dd_icon="▼" dd_icon_up="▲" dd_num={5} dd_text={['Albanian','German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['albanianflag.jpg','germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon="" required={false} onChange={field.onChange}/>
                    </div>
                )}
                ></Controller>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7 overflow-clip">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-3xl tracking-wider font-bold">Open Jobs</h1>
                    <p className="text-white/50 text-md tracking-wider">What position are you applying for?</p>
                    <OpenPosition title="Customer Care Advisor" icon="⌄" isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Languages</h1>
                    <div className="flex lg:flex-row flex-col justify-start items-start w-full lg:justify-between lg:items-start space-y-10">
                        <Controller
                            name="appliedLang"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.appliedLang && <p className="text-white tracking-wider text-md font-bold">Required Field</p>}
                                     <DropdownMenu label="What language are you applying for?" dd_icon="▼" dd_icon_up="▲" dd_num={4} dd_text={['German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon="" required={true} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                        <Controller
                            name="level"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.level && <p className="text-white tracking-wider text-md font-bold">Required Field</p>}
                                     <DropdownMenu label="What language level are you at?" dd_icon="▼" dd_icon_up="▲" dd_num={6} dd_text={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']} hidden={isHidden} dd_icons={['', '', '', '', '', '']} button_icon="" required={true} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                        <Controller
                            name="xtraLang"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.xtraLang && <p className="text-white tracking-wider text-md font-bold">Required Field</p>}
                                    <DropdownMenu label="Do you speak any other languages?(optional)" dd_icon="▼" dd_icon_up="▲" dd_num={5} dd_text={['German','Italian', 'French', 'English', 'Ukranian']} hidden={isHidden} dd_icons={['', '', '', '', '', '']} button_icon="" required={true} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-start justify-center space-y-2 w-full">
                        <h1 className="text-white text-2xl tracking-wider font-bold">Locations</h1>
                    </div>
                    <div className="flex flex-col w-full justify-start items-start">
                        <Controller
                            name="location"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.location && <p className="text-white tracting-wider text-md font-bold">Required Field</p>}
                                    <DropdownMenu label="Your preferred location to work?" dd_icon="▼" dd_icon_up="▲" dd_num={4} dd_text={['Prishtine HQ', 'Vushtrri', 'Ferizaj', 'Prizren']} hidden={isHidden} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} button_icon="" required={true} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col items-start justify-center space-y-8 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Personal data</h1>
                    <div className="flex lg:flex-row flex-col justify-start w-full md:justify-between space-y-10">
                        <Controller
                            name="name"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.name && <p className="text-white tracking-wider text-md font-bold">Required Field</p>}
                                    <TextInput label="Name" required={true} isDatePicker={false} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                        <Controller
                            name="surname"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.surname && <p className="text-white tracking-wider text-md font-bold">Required Field</p>}
                                    <TextInput label="Surname" required={true} isDatePicker={false} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                        <Controller
                            name="birthday"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.birthday && <p className="text-white text-md tracking-wider font-bold">Required Field</p>}
                                    <TextInput label="Birthdate" required={true} isDatePicker={true} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-start w-full  md:justify-between space-y-10">
                        <Controller
                            name="idnum"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.idnum && <p className="text-white text-md tracking-wider font-bold">Required Field</p>}
                                    <TextInput label="Identification Number" required={true} isDatePicker={false} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                        <Controller
                            name="residence"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.residence && <p className="text-white text-md tracking-wider font-bold">Required Field</p>}
                                    <TextInput label="Residence" required={true} isDatePicker={false} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                        <Controller
                            name="diaspora"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.diaspora && <p className="text-white text-md tracking-wider font-bold">Required Field</p>}
                                     <DropdownMenu label="Diaspora?" dd_icon="▼" dd_icon_up="▲" dd_num={2} dd_text={['true', 'false']} hidden={isHidden} dd_icons={['', '']} button_icon="" required={true} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-start md:justify-start w-full 2xl:w-3/7  space-x-11 2xl:space-x-17 space-y-10">
                        <Controller
                            name="phonenum"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.diaspora && <p className="text-white text-md tracking-wider font-bold">Required Field</p>}
                                    <TextInput label="Phone Number" required={true} isDatePicker={false} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                        <Controller
                            name="email"
                            control={control}
                            render = {({field}) =>(
                                <div className="flex flex-col space-y-2">
                                    {errors.diaspora && <p className="text-white text-md tracking-wider font-bold">Required Field</p>}
                                    <TextInput label="Email" required={true} isDatePicker={false} onChange={field.onChange}/>
                                </div>
                            )}
                        ></Controller>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start w-full 2xl:w-3/7">
                <div className="flex flex-row justify-start items-center w-full space-x-10">
                    <UploadButton isRequired={true} title="Send your CV" label="Upload Document" upload_icon="paperclip.svg"/>
                    <div className="flex flex-col">
                        <p className="text-white text-sm tracking-wider">No documents uploaded!</p>
                        <p className="text-white text-sm tracking-wider"> The maximum size of the document allowed is 25mb. Allowed types: .pdf, .doc, .docx.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start w-full 2xl:w-3/7 space-x-5">
                <Controller
                    name="checked"
                    control={control}
                    render = {({field}) =>(
                        <div className="flex flex-col space-y-2">
                            {errors.checked && <p className="text-white text-md tracking-wider font-bold">Agree to Terms</p>}
                            <CheckBox label="" onChange={e => field.onChange(field.onChange)} checked={field.value}/>
                        </div>
                    )}
                ></Controller>
                <p className="text-white text-md tracking-wider text-start">I agree to the terms of service *</p>
            </div>
            <div className="flex flex-col w-full items-start justify-center">
                <UploadButton isRequired={false} label="SUBMIT APPLICATION" upload_icon="" title=""/>
            </div>
        </form>
    );
}
export default AppForm;