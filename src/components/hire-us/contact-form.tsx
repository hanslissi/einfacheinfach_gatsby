import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../commons/input";
import TextArea from "../commons/text-area";
import emailjs from "@emailjs/browser";
import InfinityLoopArrow from "../animated-commons/infinity-loop-arrow";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "../commons/modal";
import { AnimatePresence, Variants, motion } from "framer-motion";
import InfoMessage from "../commons/info-message";
import clsx from "clsx";
import { DURATION_MEDIUM } from "../../constants/animation-constants";

const emailServiceId = process.env.GATSBY_EMAILJS_SERVICE_ID || ""; // Ensure process.env.GATSBY_EMAILJS_SERVICE_ID is defined
const emailTemplateId = process.env.GATSBY_EMAILJS_CONTACT_TEMPLATE_ID || ""; // Ensure process.env.GATSBY_EMAILJS_CONTACT_TEMPLATE_ID is defined
const emailjsPublicKey = process.env.GATSBY_EMAILJS_PUBLIC_KEY || ""; // Ensure process.env.GATSBY_EMAILJS_PUBLIC_KEY is defined
const recaptchaSiteKey = process.env.GATSBY_RECAPTCHA_SITE_KEY || "";

interface ContactFormData {
  fromCompany: string;
  workField: string;
  contactEmail: string;
  message: string;
}

const inputValidation = {
  required: {
    value: true,
    message: "Pflichtfeld",
  },
};

const submitButtonVariants: Variants = {
  idle: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: DURATION_MEDIUM,
    },
  },
  tapped: {
    scale: 0.95,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: DURATION_MEDIUM,
    },
  },
};

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [loadingAnimationPlaying, setLoadingAnimationPlaying] = useState(false); // Cause I want the loading animation to finish playing even after it's done loading
  const methods = useForm<ContactFormData>();

  const sendEmail = (data: ContactFormData, reCaptchaToken: string) => {
    const templateParams = {
      from_company: data.fromCompany,
      work_field: data.workField,
      contact_email: data.contactEmail,
      message: data.message,
      "g-recaptcha-response": reCaptchaToken,
    };

    setLoading(true);
    setLoadingAnimationPlaying(true);

    emailjs
      .send(emailServiceId, emailTemplateId, templateParams, {
        publicKey: emailjsPublicKey,
      })
      .then(
        (response) => {
          setLoading(false);
          methods.reset({
            fromCompany: "",
            workField: "",
            contactEmail: "",
            message: "",
          });
          setEmailStatus("success");
        },
        (err) => {
          setLoading(false);
          setEmailStatus("error");
        },
      );
  };

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setShowRecaptcha(false);
      sendEmail(methods.getValues(), value);
    }
  };

  const handleClickButton = () => {
    setEmailStatus("idle");
    methods.handleSubmit(() => {
      // form is valid
      setShowRecaptcha(true);
    })();
  };

  const handleAnimationComplete = () => {
    if (!loading) {
      setLoadingAnimationPlaying(false);
    }
  };

  const getInfoMessage = () => {
    switch (emailStatus) {
      case "success":
        return "Anfrage erfolgreich gesendet";
      case "error":
        return "Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut";
      default:
        return "";
    }
  };

  return (
    <div
      className={clsx(
        "relative flex flex-col max-w-[700px] px-4 w-full",
        className,
      )}
    >
      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()} noValidate>
          <div className="flex flex-col gap-2 md:gap-5">
            <Input
              name="fromCompany"
              id="fromCompany"
              type="text"
              placeholder="Firmenname"
              validation={inputValidation}
            />
            <Input
              name="workField"
              id="workField"
              type="text"
              placeholder="Branche"
              validation={inputValidation}
            />
            <Input
              name="contactEmail"
              id="contactEmail"
              type="text"
              placeholder="Kontakt (E-Mail, Telefonnummer, ...)"
              validation={inputValidation}
            />
            <TextArea
              name="message"
              id="message"
              type="text"
              placeholder="Erzählen Sie uns wie wir Ihnen helfen können"
              validation={inputValidation}
            />
            <div className="relative w-full h-32 px-10 py-6 md:p-0 my-10">
              {loadingAnimationPlaying && (
                <InfinityLoopArrow
                  className="absolute w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-105 -rotate-6 origin-center md:scale-110"
                  duration={2}
                  loop={loadingAnimationPlaying}
                  onAnimationComplete={handleAnimationComplete}
                />
              )}
              <motion.button
                className="relative w-full h-full bg-primary text-white rounded-3xl text-2xl md:text-4xl"
                disabled={loading}
                onClick={handleClickButton}
                variants={submitButtonVariants}
                animate="idle"
                whileTap="tapped"
              >
                Anfrage Senden
              </motion.button>
              <div className="flex flex-col items-center mt-4 min-h-8">
                <AnimatePresence initial={false} mode="wait">
                  {emailStatus !== "idle" && !loadingAnimationPlaying && (
                    <InfoMessage
                      message={getInfoMessage()}
                      type={emailStatus === "success" ? "success" : "error"}
                    />
                  )}
                </AnimatePresence>
              </div>
              <Modal
                open={showRecaptcha}
                onClose={() => setShowRecaptcha(false)}
              >
                <div className="flex flex-col items-center gap-4">
                  Bitte das reCAPTCHA lösen um Ihre Anfrage zu senden
                  <ReCAPTCHA
                    className="inline-block"
                    sitekey={recaptchaSiteKey}
                    onChange={handleRecaptchaChange}
                  />
                  <button
                    className="underline"
                    onClick={() => setShowRecaptcha(false)}
                  >
                    Anfrage abbrechen
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
