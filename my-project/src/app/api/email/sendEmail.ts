import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { applicationInputs } from "@/components/app_form";

export async function SendMail(data: applicationInputs){
    //set up nodemailer config & recieve data
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === "465",
        auth:{
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_APP_PASSWORD
        },
    })


const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: data.email,
    subject: "Application",
    text:[
        `Position: ${data.position}`,
        `First Name: ${data.fname}`,
        `Last Name: ${data.surname}`,
        `Applying to work in: ${data.appliedLang}`,
        data.xtraLang ? `Also speaks: ${data.xtraLang}` : '',
        `Wants to work in ${data.location}`,
        `Diaspora Status: ${data.diaspora}`,
        `Birthday: ${data.birthday}`,
        `ID: ${data.idnum}`,
        `File: ${data.upload}`,
        `Residence: ${data.residence}`,
        `Phone Number: ${data.phonenum}`
    ].filter(Boolean).join("\n"),
}
    await transporter.sendMail(mailOptions)
}