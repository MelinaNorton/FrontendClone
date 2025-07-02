import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SendMail } from "./sendEmail";

export interface NewForm {
    fname: string,
    surname: string,
    language: string,
    xtraLang: string,
    appliedLang: string,
    level : string, 
    location: string,
    diaspora: string, 
    birthday: string,
    idnum:string,
    residence: string,
    phonenum: string,
    email: string, 
    checked: boolean,
    upload: string,
    position: string,
}

export async function POST(req:Request){
    const recv_data = await req.json()
    const resp = await SendMail(recv_data)
    return NextResponse.json({ success: true });
}
