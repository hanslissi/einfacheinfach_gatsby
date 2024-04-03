import type { HeadFC, PageProps } from "gatsby"
import * as React from "react"
import RootLayout from "../components/layout/root-layout"
import emailjs from "@emailjs/browser"
import ContactForm, { ContactFormData } from "../components/hire-us/contact-form"

const emailServiceId = process.env.EMAILJS_SERVICE_ID || ''; // Ensure process.env.EMAILJS_SERVICE_ID is defined
const emailTemplateId = process.env.EMAILJS_CONTACT_TEMPLATE_ID || ''; // Ensure process.env.EMAILJS_CONTACT_TEMPLATE_ID is defined
const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY || ''; // Ensure process.env.EMAILJS_PUBLIC_KEY is defined

const HireUs: React.FC<PageProps> = () => {

    const sendEmail = (data: ContactFormData) => {
        const templateParams = {
            from_company: data.fromCompany,
            work_field: data.workField,
            contact_email: data.contactEmail,
            message: data.message,
        }

        console.log(templateParams);

        emailjs.send(emailServiceId, emailTemplateId, templateParams, {
            publicKey: emailjsPublicKey,
        }).then(
            (response) => {
                console.log(response);
                alert('SUCCESS! Check your email');
            },
            (err) => {
                console.log(err);
                alert('FAILED... go to sleep ma boi');
            },
        );
    }

    const handleSubmit = (data: ContactFormData) => {
        sendEmail(data);
    }

    return (
        <RootLayout>
            <main>
                <ContactForm 
                    handleSubmit={handleSubmit}
                />
            </main>
        </RootLayout>
    )
}

export default HireUs

export const Head: HeadFC = () => <title>Hire us! - einfacheinfach</title>
