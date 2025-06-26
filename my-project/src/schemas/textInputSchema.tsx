import * as yup from 'yup'

export const TextInputSchema = yup.object({
    fname: yup.string().required("name is required").max(20),
    surname: yup.string().required("surname is required").max(20),
    language: yup.string().required("language is required").max(20),
    xtraLang: yup.string().required().max(20),
    appliedLang: yup.string().required("languaged applied for is required").max(20),
    level : yup.string().required("level is required").max(20), //restrict the value to only the valid levels
    location: yup.string().required("location preference is required").max(20),
    diaspora: yup.string().required("diaspora status is required").max(20), //restrict to only values 'true'/'false'
    birthday: yup.string().required("birthday is required").max(20),
    idnum: yup.string().required("id number is required").max(20),
    residence: yup.string().required("residence is required").max(20),
    phonenum: yup.string().required("phone number is required").max(20), //phone number format validatin
    email: yup.string().required("email is required").max(20), //check if its in email format
    checked: yup.boolean().required("please check box"),
    uploaded: yup.boolean().required("please upload document"),
    position: yup.string().required()
})

