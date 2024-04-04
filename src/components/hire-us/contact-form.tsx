import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../commons/input";
import SectionWrapper from "../wrappers/section-wrapper";
import TextArea from "../commons/text-area";
import emailjs from "@emailjs/browser"
import InfinityLoopArrow from "../animated-commons/infinity-loop-arrow";
import ReCAPTCHA from 'react-google-recaptcha';
import Modal from "../commons/modal";
import { AnimatePresence } from "framer-motion";
import InfoMessage from "../commons/info-message";

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
    const [showRecaptcha, setShowRecaptcha] = useState(false);
    const [emailStatus, setEmailStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [loadingAnimationPlaying, setLoadingAnimationPlaying] = useState(false); // Cause I want the loading animation to finish playing even after it's done loading
    const methods = useForm<ContactFormData>();

    const sendEmail = (data: ContactFormData, reCaptchaToken: string) => {
        const templateParams = {
            from_company: data.fromCompany,
            work_field: data.workField,
            contact_email: data.contactEmail,
            message: data.message,
            'g-recaptcha-response': reCaptchaToken,
        }

        setLoading(true);
        setLoadingAnimationPlaying(true);

        emailjs.send(emailServiceId, emailTemplateId, templateParams, {
            publicKey: emailjsPublicKey,
        }).then(
            (response) => {
                setLoading(false);
                methods.reset({
                    fromCompany: '',
                    workField: '',
                    contactEmail: '',
                    message: '',
                });
                setEmailStatus('success');
            },
            (err) => {
                setLoading(false);
                setEmailStatus('error');
            },
        );
    }

    const handleRecaptchaChange = (value: string | null) => {
        if (value) {
            setShowRecaptcha(false);
            sendEmail(methods.getValues(), value);
        }
    }

    const handleClickButton = () => {
        setEmailStatus('idle');
        methods.handleSubmit(() => {
            // form is valid
            setShowRecaptcha(true);
        })();
    };

    const handleAnimationComplete = () => {
        if (!loading) {
            setLoadingAnimationPlaying(false);
        }
    }

    const getInfoMessage = () => {
        switch (emailStatus) {
            case 'success':
                return 'Message sent successfully';
            case 'error':
                return 'An error occurred while sending the message please try again later';
            default:
                return '';
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
                            <div className="relative w-full h-32 my-20">
                                {loadingAnimationPlaying &&
                                    <InfinityLoopArrow
                                        className="absolute w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-110 -rotate-6 origin-center"
                                        duration={2}
                                        loop={loadingAnimationPlaying}
                                        onAnimationComplete={handleAnimationComplete}
                                    />
                                }
                                <button
                                    onClick={handleClickButton}
                                    disabled={loading}
                                    className="relative w-full h-full bg-primary text-white rounded-3xl text-4xl"
                                >
                                    Send Request
                                </button>
                                <div className="flex flex-col items-center mt-4 min-h-8">
                                    <AnimatePresence initial={false} mode="wait">
                                        {(emailStatus !== 'idle' && !loadingAnimationPlaying) && (
                                            <InfoMessage
                                                message={getInfoMessage()}
                                                type={emailStatus === 'success' ? 'success' : 'error'}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                                <Modal open={showRecaptcha} onClose={() => setShowRecaptcha(false)} >
                                    <div className="flex flex-col items-center gap-4">
                                        Please solve the reCAPTCHA to send your request
                                        <ReCAPTCHA
                                            className="inline-block"
                                            sitekey={process.env.RECAPTCHA_SITE_KEY || ''}
                                            onChange={handleRecaptchaChange}
                                        />
                                        <button className="underline" onClick={() => setShowRecaptcha(false)}>
                                            Cancel message request
                                        </button>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </SectionWrapper>
    )
}

export default ContactForm;