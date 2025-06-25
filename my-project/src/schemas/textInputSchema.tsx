import * as yup from 'yup'

export const TextInputSchema = yup.object({
    name: yup.string().required().max(20),
    surname: yup.string().required().max(20),
    language: yup.string().required().max(20),
    xtraLang: yup.string().required().max(20),
    appliedLang: yup.string().required().max(20),
    level : yup.string().required().max(20),
    location: yup.string().required().max(20),
    diaspora: yup.string().required().max(20),
    birthday: yup.string().required().max(20),
    idnum: yup.string().required().max(20),
    residence: yup.string().required().max(20),
    phonenum: yup.string().required().max(20),
    email: yup.string().required().max(20)
})
