import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../commons/input";
import SectionWrapper from "../wrappers/section-wrapper";
import TextArea from "../commons/text-area";

export interface ContactFormData {
    fromCompany: string,
    workField: string,
    contactEmail: string,
    message: string
}

interface ContactFormProps {
    handleSubmit: (data: ContactFormData) => void
}

const ContactForm = ({ handleSubmit }: ContactFormProps) => {
    const methods = useForm();

    const handleClickButton = methods.handleSubmit((data) => {
        handleSubmit(data as ContactFormData);
    })

    const inputValidation = {
        required: {
            value: true,
            message: "required"
        }
    }

    return (
        <SectionWrapper>
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
                    </div>
                    <div className="mt-5">
                        <button
                            onClick={handleClickButton}
                            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
                        >

                            Submit Form
                        </button>
                    </div>
                </form>
            </FormProvider>
        </SectionWrapper>
    )
}

export default ContactForm;