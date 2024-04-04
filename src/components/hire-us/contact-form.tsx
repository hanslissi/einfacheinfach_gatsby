import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../commons/input";
import SectionWrapper from "../wrappers/section-wrapper";
import TextArea from "../commons/text-area";
import emailjs from "@emailjs/browser"
import InfinityLoopArrow from "../animated-commons/infinity-loop-arrow";

const emailServiceId = process.env.EMAILJS_SERVICE_ID || ''; // Ensure process.env.EMAILJS_SERVICE_ID is defined
const emailTemplateId = process.env.EMAILJS_CONTACT_TEMPLATE_ID || ''; // Ensure process.env.EMAILJS_CONTACT_TEMPLATE_ID is defined
const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY || ''; // Ensure process.env.EMAILJS_PUBLIC_KEY is defined

interface ContactFormData {
    fromCompany: string,
    workField: string,
    contactEmail: string,
    message: string
}

const inputValidation = {
    required: {
        value: true,
        message: "required"
    }
}

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [loadingAnimationPlaying, setLoadingAnimationPlaying] = useState(false); // Cause I want the loading animation to finish playing even after it's done loading
    const methods = useForm();

    const sendEmail = (data: ContactFormData) => {
        const templateParams = {
            from_company: data.fromCompany,
            work_field: data.workField,
            contact_email: data.contactEmail,
            message: data.message,
        }

        setLoading(true);
        setLoadingAnimationPlaying(true);

        emailjs.send(emailServiceId, emailTemplateId, templateParams, {
            publicKey: emailjsPublicKey,
        }).then(
            (response) => {
                console.log(response);
                setLoading(false);
                methods.reset({
                    fromCompany: '',
                    workField: '',
                    contactEmail: '',
                    message: '',
                });
            },
            (err) => {
                console.log(err);
                setLoading(false);
            },
        );
    }

    const handleClickButton = methods.handleSubmit((data) => {
        sendEmail(data as ContactFormData);
    })

    const handleAnimationComplete = () => {
        if (!loading) {
            setLoadingAnimationPlaying(false);
        }
    }

    return (
        <SectionWrapper className="flex flex-col items-center">
            <div className="flex flex-col py-10 max-w-[700px] w-full">
                <FormProvider {...methods}>
                    <form
                        onSubmit={e => e.preventDefault()}
                        noValidate
                    >
                        <div className="flex flex-col gap-5">
                            <Input
                                name="fromCompany"
                                id="fromCompany"
                                type="text"
                                placeholder="company name"
                                validation={inputValidation}
                            />
                            <Input
                                name="workField"
                                id="workField"
                                type="text"
                                placeholder="field of work"
                                validation={inputValidation}
                            />
                            <Input
                                name="contactEmail"
                                id="contactEmail"
                                type="text"
                                placeholder="contact email"
                                validation={inputValidation}
                            />
                            <TextArea
                                name="message"
                                id="message"
                                type="text"
                                placeholder="describe to us how we can help your company"
                                validation={inputValidation}
                            />
                            <div className="relative w-full">
                                {loadingAnimationPlaying &&
                                    <InfinityLoopArrow
                                        className="absolute w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-110 -rotate-6 origin-center z-10"
                                        duration={2}
                                        loop={loadingAnimationPlaying}
                                        onAnimationComplete={handleAnimationComplete}
                                    />
                                }
                                <button
                                    onClick={handleClickButton}
                                    disabled={loading}
                                    className="relative w-full bg-primary text-white px-20 py-10 my-20 rounded-3xl text-4xl z-20"
                                >
                                    Send Request
                                </button>
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </SectionWrapper>
    )
}

export default ContactForm;