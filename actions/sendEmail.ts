"use server"

import { Resend } from 'resend'
import { validateString, getErrorMessage } from '@/lib/utils'
import ContactFormEmail from '@/email/contact-form-email'
 
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail') as string
    const message = formData.get('message') as string
    
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "mathchambaud2000@gmail.com",
            subject: "Message from your contact form",
            reply_to: senderEmail,
            react: ContactFormEmail({ senderEmail, message })
        });
    } catch (err: any) {
        return {
            error: getErrorMessage(err)
        } 
    }

    return {
        data
    }
}
