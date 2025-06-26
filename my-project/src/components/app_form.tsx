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
import DDFormField from "./ddformfield";
import TFFormField from "./tfformfield";
import OPFormField from "./openposform";


export type applicationInputs = {
    fname : string,
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
    uploaded : boolean,
    position : string
}

const AppForm = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [isHidden, setIsHidden] = useState(true);
    const [selectedPos, setSelectedPos] = useState("");

    const setSelected = (title:string) =>{
        setSelectedPos(title)
    }
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm<applicationInputs>({
        resolver: yupResolver(TextInputSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            fname: '',
            surname: '',
            language: '',
            xtraLang: '',
            appliedLang: '',
            location: '',
            diaspora: '',
            birthday: '',
            idnum: '',
            residence: '',
            phonenum: '',
            email: '',
            checked: false,
            uploaded: false,
            position: ''
        },
    });

    const onSubmit: SubmitHandler<applicationInputs> = (data) => {
        console.log(errors)
        console.log(data.fname)
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
    }


    return(
        <div className="p-4">
            <div className="relative flex flex-row w-full 2xl:w-3/7 justify-end items-center">
                <DDFormField control={control} name="language" dd_num={5} dd_text={['Albanian','German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['albanianflag.jpg','germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} required={false}/>
            </div>
        <form onSubmit={handleSubmit(onSubmit, errors => console.warn('Validation failed:', errors))} className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans">
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7 overflow-clip">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-3xl tracking-wider font-bold">Open Jobs</h1>
                    <p className="text-white/50 text-md tracking-wider">What position are you applying for?</p>
                    <OPFormField control={control} name="position" title="Customer Care Advisor" isSelected={isSelected} onClick={setSelected}/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Languages</h1>
                    <div className="flex lg:flex-row flex-col justify-start items-start w-full lg:justify-between lg:items-start space-y-10">
                        <DDFormField name="appliedLang" control={control} label={"What language are you applying for?"} dd_num={4} dd_text={['German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']}/>
                        <DDFormField name="level" control={control} label="What language level are you?" dd_num={6} dd_text={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']}/>
                        <DDFormField name="xtraLang" control={control} label="Do you speak any other languages?(optional)" dd_num={5} dd_text={['German','Italian', 'French', 'English', 'Ukranian']} required={false}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-start justify-center space-y-2 w-full">
                        <h1 className="text-white text-2xl tracking-wider font-bold">Locations</h1>
                    </div>
                    <div className="flex flex-col w-full justify-start items-start">
                        <DDFormField name="location" control={control} label="Your preferred location to work?" dd_num={4} dd_text={['Prishtine HQ', 'Vushtrri', 'Ferizaj', 'Prizren']} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col items-start justify-center space-y-8 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Personal data</h1>
                    <div className="flex lg:flex-row flex-col justify-start w-full md:justify-between space-y-10">
                        <TFFormField name="fname" control={control} label="Name"/>
                        <TFFormField name="surname" control={control} label="Surname"/>
                        <TFFormField name="birthday" control={control} label="Birthdate" isDatePicker={true}/>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-start w-full  md:justify-between space-y-10">
                        <TFFormField name="idnum" control={control} label="Identification Number"/>
                        <TFFormField name="residence" control={control} label="Residence"/>
                        <DDFormField name="diaspora" control={control} label="Diaspora?" dd_num={2} dd_text={['true', 'false']}/>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-start md:justify-start w-full 2xl:w-3/7  space-x-11 2xl:space-x-17 space-y-10">
                        <TFFormField name="phonenum" control={control} label="Phone Number"/>
                        <TFFormField name="email" control={control} label="Email"/>
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
                            {errors.checked && <p className="text-white text-md tracking-wider font-bold">{errors.checked.message}</p>}
                            <CheckBox label="" onChange={e => field.onChange(e)} checked={field.value}/>
                        </div>
                    )}
                ></Controller>
                <p className="text-white text-md tracking-wider text-start">I agree to the terms of service *</p>
            </div>
            <div className="flex flex-col w-full items-start justify-center">
                <UploadButton isRequired={false} label="SUBMIT APPLICATION" upload_icon="" title=""/>
            </div>
        </form>
        </div>
    );
}
export default AppForm;