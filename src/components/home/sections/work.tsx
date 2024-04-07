import React, { useRef } from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import WorkInformationCard from "../work-information-card";
import LongCurvyArrrowLineSvg from "../../animated-commons/long-curvy-arrow-line";
import RoundyCrazySvg from "../../../assets/shapes/Roundy_Crazy.svg";
import DonutySvg from "../../../assets/shapes/Donuty.svg";
import WavyPattern from '../../../assets/patterns/wavy_pattern.svg';
import DiagonalLinePattern from '../../../assets/patterns/diagonal_line_pattern.svg';
import { Variants, motion, useInView, useScroll, useTransform } from "framer-motion";
import useParallax from "../../../hooks/useParallax";
import { DURATION_FAST, DURATION_SLOW } from "../../../constants/animation-constants";
import { StaticImage } from "gatsby-plugin-image";

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

const Work = () => {
    const refWorkCardsDiv = useRef(null);
    const refSection = useRef(null);
    const refParagraph = useRef(null);
    const { scrollYProgress: scrollYProgressSection } = useScroll();
    const { scrollYProgress: scrollYProgressWorkCardsDiv } = useScroll({
        target: refWorkCardsDiv,
        offset: ["-90vh", "end 80vh"]
    });
    const yParallaxXl = useParallax(scrollYProgressSection, 700);
    const yParallaxMd = useParallax(scrollYProgressSection, 400);
    const yParallaxSm = useParallax(scrollYProgressSection, 200);
    const pathLength = useTransform(scrollYProgressWorkCardsDiv, [0, 1], [1, 0]);
    const paragraphInView = useInView(refParagraph);

    return (
        <SectionWrapper
            ref={refSection}
            id="work"
            className="container mt-12 md:mt-40"
        >
            {/* background parallax shapes begin */}
            <motion.div
                className="absolute -right-10 top-[15%] w-[15%] h-32"
                style={{ y: yParallaxMd, backgroundImage: `url(${WavyPattern})`, backgroundRepeat: 'repeat', backgroundSize: '44%' }}
            />
            <motion.img
                className="absolute hidden md:block -left-10 top-1/3 md:left-8 z-10"
                src={RoundyCrazySvg}
                style={{ y: yParallaxMd, rotate: yParallaxSm }}
            />
            <motion.img
                className="absolute hidden md:block -right-40 top-[40%] z-10"
                src={DonutySvg}
                style={{ y: yParallaxXl }}
            />
            <motion.div
                className="absolute left-0 top-[60%] w-[25%] h-12 md:w-[15%] md:h-32"
                style={{ y: yParallaxSm, backgroundImage: `url(${DiagonalLinePattern})`, backgroundRepeat: 'repeat', backgroundSize: '40%' }}
            />
            <motion.img
                className="absolute hidden md:block -left-32 bottom-1/4 h-40"
                src={DonutySvg}
                style={{ y: yParallaxXl }}
            />
            <motion.img
                className="absolute -right-6 bottom-[10%] md:right-10"
                src={RoundyCrazySvg}
                style={{ y: yParallaxMd, rotate: yParallaxMd }}
            />
            {/* background parallax shapes end */}

            <h1 className="text-primary text-center font-bold">Projekte</h1>
            <p ref={refParagraph} className="text-center mt-4">
                Einige Projekte von uns. {" "}
                <span className="relative">
                    Coming Soon!
                    <div className="absolute -bottom-[2em] left-0">
                        <motion.svg className="max-w-[100%]" width="286.27" height="45.66" viewBox="0 0 286.27 45.66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                d="M285.77,1.17c-46.92-1.24-93.94-.52-140.9,.2C104.48,1.99,63.58,.72,23.56,4.15c-5.89,.5-17.05,1.08-21.55,3.08-.89,.4-1.7,.95-1.48,1.54,.31,.8,2.24,1.11,3.85,1.24,19.26,1.57,39.55,1.39,59.06,2.18,24.03,.96,48.03,2.1,71.95,3.55,14.52,.88,28.93,2,42.33,5.07,6.72,1.54-3.11,2.86-5.45,3.22-5.93,.92-12.04,1.53-17.85,2.63-8.43,1.6-22.6,4.23-28.2,7.96-3.86,2.57-1.75,5.33,2.98,7.04,3.48,1.26,7.68,2.02,10.79,3.5"
                                stroke="#0047ab"
                                strokeWidth="2"
                                strokeLinecap="round"
                                variants={scribbleUnderlineVariants}
                                initial="hidden"
                                animate={paragraphInView ? "visible" : "hidden"}
                            />
                        </motion.svg>
                    </div>
                </span>
            </p>
            <div className="relative w-full mt-2 flex flex-col justify-center gap-10 px-10 py-10 md:py-24 md:gap-20 md:mt-0 md:px-24 lg:px-60" ref={refWorkCardsDiv}>
                <LongCurvyArrrowLineSvg pathLength={pathLength} className="absolute inset-0 z-0 h-full w-full" />
                <WorkInformationCard
                    title="Geheimes Projekt"
                    description="Coming Soon!"
                    url="/"
                    thumbnailImage={
                        (props) => (
                            <StaticImage
                                className={props.className}
                                alt={props.title}
                                src={"../../../assets/pictures/works/meldeamt_work_thumbnail.png"}
                            />
                        )
                    }
                    className="z-20"
                />
                <WorkInformationCard
                    title="Super Geheimes Projekt"
                    description="Coming Soon!"
                    url="/"
                    thumbnailImage={
                        (props) => (
                            <StaticImage
                                className={props.className}
                                alt={props.title}
                                src={"../../../assets/pictures/works/phone_work_thumbnail.png"}
                            />
                        )
                    }
                    className="z-20"
                />
                <WorkInformationCard
                    title="Pssst! Geheimes Projekt"
                    description="Coming Soon!"
                    url="/"
                    thumbnailImage={
                        (props) => (
                            <StaticImage
                                className={props.className}
                                alt={props.title}
                                src={"../../../assets/pictures/works/tim_work_thumbnail.png"}
                            />
                        )
                    }
                    className="z-20"
                />
            </div>
        </SectionWrapper>
    )
}

export default Work;