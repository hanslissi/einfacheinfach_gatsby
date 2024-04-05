import { Link } from "@reach/router";
import { Variants, motion, useInView, useScroll } from "framer-motion";
import type { HeadFC } from "gatsby";
import * as React from "react";
import { useRef } from "react";
import DiagonalLinePattern from '../assets/patterns/diagonal_line_pattern.png';
import DonutySvg from "../assets/shapes/Donuty.svg";
import RoundyCrazySvg from "../assets/shapes/Roundy_Crazy.svg";
import Logo from '../assets/einfacheinfach_logo_blue.svg';
import ContactForm from "../components/hire-us/contact-form";
import RootLayout from "../components/layout/root-layout";
import SectionWrapper from "../components/wrappers/section-wrapper";
import { DURATION_FAST, DURATION_SLOW } from "../constants/animation-constants";
import useParallax from "../hooks/useParallax";
import DirectionArrowDownLeft from "../components/animated-commons/direction-arrow-down-left";

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
    const refSection = useRef(null);
    const { scrollYProgress: scrollYProgressSection } = useScroll();
    const yParallaxMd = useParallax(scrollYProgressSection, 400);
    const yParallaxSm = useParallax(scrollYProgressSection, 200);
    const headlineInView = useInView(refHeadline);
    const paragraphInView = useInView(refParagraph);

    return (
        <RootLayout nav={false}>
            <main>
                <SectionWrapper ref={refSection} className="flex flex-col items-center pb-20 mt-auto">

                    {/* background parallax shapes begin */}
                    <motion.img
                        className="absolute -left-10 top-1/3 md:left-8"
                        src={RoundyCrazySvg}
                        style={{ y: yParallaxMd, rotate: yParallaxSm }}
                    />
                    <motion.img
                        className="absolute -right-40 top-3/4 md:top-1/4"
                        src={DonutySvg}
                        style={{ y: yParallaxSm }}
                    />
                    <motion.div
                        className="absolute left-4 top-[60%] w-[25%] h-32 md:left-[20%] md:w-[15%]"
                        style={{ y: yParallaxSm, backgroundImage: `url(${DiagonalLinePattern})`, backgroundRepeat: 'repeat', backgroundSize: '40%' }}
                    />
                    <motion.img
                        className="absolute hidden lg:block -left-32 bottom-1/4 h-40"
                        src={DonutySvg}
                        style={{ y: yParallaxMd }}
                    />
                    <motion.img
                        className="absolute hidden md:block right-10 bottom-[10%]"
                        src={RoundyCrazySvg}
                        style={{ y: yParallaxMd, rotate: yParallaxSm }}
                    />
                    {/* background parallax shapes end */}
                    <Link to="/">
                        <img
                            className="h-12 mt-20 md:h-20"
                            src={Logo}
                        />
                    </Link>
                    <h1 ref={refHeadline} className="relative font-bold text-primary mt-20">Schicke {" "}
                        <span className="relative inline-block">
                            eine Anfrage!
                            <div className="absolute -bottom-[100%] left-0">
                                <motion.svg className="max-w-[100%]" width="545" height="57" viewBox="0 0 545 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M2.29297 17.7656C159.122 14.2162 316.002 11.7953 472.764 5.86895C494.866 5.03339 561.004 0.500601 539.068 3.331C478.808 11.1065 417.121 12.4449 356.654 18.4C321.676 21.8448 273.32 27.0879 236.894 33.1519C229.845 34.3253 222.826 35.7835 215.956 37.7519C203.947 41.1932 211.627 42.3005 219.842 43.6209C279.678 53.2373 341.599 52.3041 402.019 54.883"
                                        stroke="#0047ab"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        variants={scribbleUnderlineVariants}
                                        initial="hidden"
                                        animate={headlineInView ? "visible" : "hidden"}
                                    />
                                </motion.svg>
                            </div>
                        </span>
                        <DirectionArrowDownLeft
                            className="absolute hidden md:block h-[3em] -left-[3em] top-[0.5em]"
                            show={headlineInView}
                        />
                    </h1>
                    <ContactForm className="mt-10 md:mt-20"/>
                    <p ref={refParagraph}>
                        Wir antworten {" "}
                        <span className="relative inline-block">
                            so schnell wie möglich
                            <div className="absolute -bottom-[2em] left-0">
                                <motion.svg className="max-w-[100%]" width="286.27" height="45.66" viewBox="0 0 286.27 45.66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <motion.path
                                        d="M285.77,1.17c-46.92-1.24-93.94-.52-140.9,.2C104.48,1.99,63.58,.72,23.56,4.15c-5.89,.5-17.05,1.08-21.55,3.08-.89,.4-1.7,.95-1.48,1.54,.31,.8,2.24,1.11,3.85,1.24,19.26,1.57,39.55,1.39,59.06,2.18,24.03,.96,48.03,2.1,71.95,3.55,14.52,.88,28.93,2,42.33,5.07,6.72,1.54-3.11,2.86-5.45,3.22-5.93,.92-12.04,1.53-17.85,2.63-8.43,1.6-22.6,4.23-28.2,7.96-3.86,2.57-1.75,5.33,2.98,7.04,3.48,1.26,7.68,2.02,10.79,3.5"
                                        stroke="#0047ab"
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
                </SectionWrapper>
            </main>
        </RootLayout>
    )
}

export default HireUs

export const Head: HeadFC = () => <title>Hire us! - einfacheinfach</title>
