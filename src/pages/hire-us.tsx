import type { HeadFC } from "gatsby"
import * as React from "react"
import RootLayout from "../components/layout/root-layout"
import ContactForm from "../components/hire-us/contact-form"
import Logo from '../assets/einfacheinfach_logo_blue.svg';
import { Link } from "@reach/router";
import { Variants, motion, useInView } from "framer-motion";
import { DURATION_FAST, DURATION_SLOW } from "../constants/animation-constants";
import { useRef } from "react";

const scribbleUnderlineVariants: Variants = {
    hidden: {
        pathLength: 0,
        transition: {
            ease: "easeInOut",
            duration: DURATION_FAST
        }
    },
    visible: {
        pathLength: 1,
        transition: {
            ease: "easeInOut",
            duration: DURATION_SLOW
        }
    }
}

const HireUs = () => {
    const refHeadline = useRef(null);
    const refParagraph = useRef(null);
    const headlineInView = useInView(refHeadline);
    const paragraphInView = useInView(refParagraph);

    return (
        <RootLayout nav={false}>
            <main>
                <div className="flex flex-col items-center pb-20">
                    <Link to="/">
                        <img
                            className="h-12 mt-20 md:h-20"
                            src={Logo}
                        />
                    </Link>
                    <h1 ref={refHeadline} className="font-bold text-primary mt-20">Hire {" "}
                        <span className="relative inline-block">
                            our services!
                            <div className="absolute -bottom-[100%] left-0">
                                <motion.svg className="max-w-[100%]" width="545" height="57" viewBox="0 0 545 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M2.29297 17.7656C159.122 14.2162 316.002 11.7953 472.764 5.86895C494.866 5.03339 561.004 0.500601 539.068 3.331C478.808 11.1065 417.121 12.4449 356.654 18.4C321.676 21.8448 273.32 27.0879 236.894 33.1519C229.845 34.3253 222.826 35.7835 215.956 37.7519C203.947 41.1932 211.627 42.3005 219.842 43.6209C279.678 53.2373 341.599 52.3041 402.019 54.883"
                                        stroke="#150FF4"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        variants={scribbleUnderlineVariants}
                                        initial="hidden"
                                        animate={headlineInView ? "visible" : "hidden"}
                                    />
                                </motion.svg>
                            </div>
                        </span>
                    </h1>
                    <ContactForm />
                    <p ref={refParagraph}>
                        We will reply {" "}
                        <span className="relative inline-block">
                            as soon as possible
                            <div className="absolute -bottom-[100%] left-0">
                                <motion.svg className="max-w-[100%]" width="286.27" height="45.66" viewBox="0 0 286.27 45.66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M285.77,1.17c-46.92-1.24-93.94-.52-140.9,.2C104.48,1.99,63.58,.72,23.56,4.15c-5.89,.5-17.05,1.08-21.55,3.08-.89,.4-1.7,.95-1.48,1.54,.31,.8,2.24,1.11,3.85,1.24,19.26,1.57,39.55,1.39,59.06,2.18,24.03,.96,48.03,2.1,71.95,3.55,14.52,.88,28.93,2,42.33,5.07,6.72,1.54-3.11,2.86-5.45,3.22-5.93,.92-12.04,1.53-17.85,2.63-8.43,1.6-22.6,4.23-28.2,7.96-3.86,2.57-1.75,5.33,2.98,7.04,3.48,1.26,7.68,2.02,10.79,3.5"
                                        stroke="#150FF4"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        variants={scribbleUnderlineVariants}
                                        initial="hidden"
                                        animate={paragraphInView ? "visible" : "hidden"}
                                    />
                                </motion.svg>
                            </div>
                        </span>
                    </p>
                </div>

            </main>
        </RootLayout>
    )
}

export default HireUs

export const Head: HeadFC = () => <title>Hire us! - einfacheinfach</title>
