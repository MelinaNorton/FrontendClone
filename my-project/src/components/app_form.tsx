'use client'
import { useState } from "react";
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
import UDFormfield from "./UDformfield";
import axios from "axios";

export const dependent_inputs = ['language', 'level', 'xtralang']

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
    upload : string,
    position : string
}

const defaultFormState = {
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
            upload: '',
            position: ''
}

const AppForm = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [selectedPos, setSelectedPos] = useState("");

    const setSelected = (title:string) =>{
        setSelectedPos(title)
    }
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        reset,
        control,
        formState: { errors },
        formState: { isSubmitSuccessful},
    } = useForm<applicationInputs>({
        resolver: yupResolver(TextInputSchema),
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: defaultFormState,
    });

    console.log('errors', errors)

    //place the api call in the submit handler
    const onSubmit: SubmitHandler<applicationInputs> = async(data) => {
        console.log(errors)
        console.log(data.position)
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
        console.log(data.upload)
        //call your API function like an endpoint her eover HTTP
        const resp = await axios.post('/api/email', data)
        console.log('Mail sent:', resp.data)
        reset()
    }

    return(
        <div className="p-4">
            <div className="relative flex flex-row w-full 2xl:w-3/7 justify-end items-center">
                <DDFormField control={control} name="language" dd_num={5} dd_text={['Albanian','German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['albanianflag.jpg','germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} required={false} getValue={getValues} position={'position'} dependent_input="language"/>
            </div>
        <form onSubmit={handleSubmit(onSubmit, errors => console.warn('Validation failed:', errors))} className="bg-black bg-cover h-min-screen flex flex-col lg:gap-y-10 gap-y-10 justify-start items-center relative overflow-x-clip font-sans">
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7 overflow-clip">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-3xl tracking-wider font-bold">Open Jobs</h1>
                    <p className="text-white/50 text-md tracking-wider">What position are you applying for?</p>
                    <OPFormField control={control} name="position" title="Customer Care Advisor" isSelected={""} onClick={setSelected} setValue={setValue} getValue={getValues}/>
                    <input type="hidden" {...register("position")} value={selectedPos} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col items-start justify-center space-y-2 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Languages</h1>
                    <div className="flex lg:flex-row flex-col justify-start items-start w-full lg:justify-between lg:items-start space-y-10">
                        <DDFormField name="appliedLang" control={control} label={"What language are you applying for?"} dd_num={4} dd_text={['German', 'French', 'Italian', 'English']} hidden={isHidden} dd_icons={['germanflag.png', 'frenchflag.jpg', 'italianflag.jpg', 'britishflag.png']} getValue={getValues} position={'position'} dependent_input="language"/>
                        <DDFormField name="level" control={control} label="What language level are you?" dd_num={6} dd_text={['A1', 'A2', 'B1', 'B2', 'C1', 'C2']} getValue={getValues} position={'position'} dependent_input="level"/>
                        <DDFormField name="xtraLang" control={control} label="Do you speak any other languages?(optional)" dd_num={5} dd_text={['German','Italian', 'French', 'English', 'Ukranian']} required={false} getValue={getValues} position={'position'} dependent_input="xtralang"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col items-start justify-center space-y-2 w-full">
                        <h1 className="text-white text-2xl tracking-wider font-bold">Locations</h1>
                    </div>
                    <div className="flex flex-col w-full justify-start items-start">
                        <DDFormField name="location" control={control} label="Your preferred location to work?" dd_num={4} dd_text={['Prishtine HQ', 'Vushtrri', 'Ferizaj', 'Prizren']} dd_icons={['', '', '', '']} getValue={getValues} position={'position'} dependent_input="none"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-start items-center w-full 2xl:w-3/7">
                <div className="flex flex-col items-start justify-center space-y-8 w-full">
                    <h1 className="text-white text-2xl tracking-wider font-bold">Personal data</h1>
                    <div className="flex lg:flex-row flex-col justify-start w-full md:justify-between space-y-10">
                        <TFFormField name="fname" control={control} label="Name" getValue={getValues} position={'position'}/>
                        <TFFormField name="surname" control={control} label="Surname" getValue={getValues} position={'position'}/>
                        <TFFormField name="birthday" control={control} label="Birthdate" isDatePicker={true} getValue={getValues} position={'position'}/>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-start w-full  md:justify-between space-y-10">
                        <TFFormField name="idnum" control={control} label="Identification Number" getValue={getValues} position={'position'}/>
                        <TFFormField name="residence" control={control} label="Residence" getValue={getValues} position={'position'}/>
                        <DDFormField name="diaspora" control={control} label="Diaspora?" dd_num={2} dd_text={['true', 'false']} getValue={getValues} position={'position'} dependent_input="none"/>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-start md:justify-start w-full 2xl:w-3/7  space-x-11 2xl:space-x-17 space-y-10">
                        <TFFormField name="phonenum" control={control} label="Phone Number" getValue={getValues} position={'position'}/>
                        <TFFormField name="email" control={control} label="Email" getValue={getValues} position={'position'}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start w-full 2xl:w-3/7">
                <div className="flex flex-row justify-start items-center w-full space-x-10">
                    <UDFormfield isSubmitted={isSubmitSuccessful} position={'position'}getValue={getValues} setValue={setValue} name="upload" control={control} required={true} title="Send your CV" label="Upload Document" uploadIcon="paperclip.svg" disabled={getValues('position')==""}/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-start w-full 2xl:w-3/7 space-x-5">
                <Controller
                    name="checked"
                    control={control}
                    render = {({field, fieldState:{error}}) =>(
                        <div className="flex flex-col space-y-2 relative">
                            {error && <p className="text-red-700 text-sm text-boldw-200">{error.message}</p>}
                            <div className="flex flex-row space-x-2">
                                <CheckBox label="" onChange={field.onChange} checked={field.value}/>
                                <p className="text-white text-md tracking-wider text-start">I agree to the terms of service *</p>
                            </div>
                        </div>
                    )}
                ></Controller>
            </div>
            <div className="flex flex-col w-full items-start justify-center">
                <UploadButton isSubmitted={isSubmitSuccessful} setValue={setValue} required={false} label="SUBMIT APPLICATION" upload_icon="" title="" disabled={getValues('position')==""}/>
            </div>
        </form>
        </div>
    );
}
export default AppForm;