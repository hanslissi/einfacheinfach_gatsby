import React from "react";
import { FieldError, FieldErrorsImpl, FieldValues, Merge, RegisterOptions, useFormContext } from "react-hook-form";
import { findInputError } from "../../util/findInputError";
import { isFormInvalid } from "../../util/isFormValid";
import { AnimatePresence, motion } from "framer-motion";
import { DURATION_FAST } from "../../constants/animation-constants";
import InputError from "./InputError";

interface TextAreaProps {
    type: string;
    id: string;
    placeholder: string;
    validation: RegisterOptions<FieldValues, string>
    name: string;
}

const TextArea = ({ id, placeholder, validation, name }: TextAreaProps) => {
    const { register, formState: { errors } } = useFormContext();

    const inputError = findInputError(errors, name);
    const isInvalid = isFormInvalid(inputError);

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-end h-6">
                <AnimatePresence
                    mode="wait" initial={false}
                >
                    {isInvalid && (
                        <InputError
                            message={inputError.error?.message}
                            key={inputError.error?.message?.toString()}
                        />
                    )}
                </AnimatePresence>
            </div>
            <textarea
                id={id}
                className="w-full p-5 h-32 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                placeholder={placeholder}
                {...register(name, validation)}
            />
        </div>
    )
}

export default TextArea;