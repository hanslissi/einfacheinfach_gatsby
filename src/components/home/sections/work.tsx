import React, { useRef } from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import WorkInformationCard from "../work-information-card";
import LongCurvyArrrowLineSvg from "../../svg/long-curvy-arrow-line";
import MeldeamtWorkThumbnail from "../../../assets/pictures/works/meldeamt_work_thumbnail.png";
import TimWorkThumbnail from "../../../assets/pictures/works/tim_work_thumbnail.png";
import PhoneWorkThumbnail from "../../../assets/pictures/works/phone_work_thumbnail.png";
import RoundyCrazySvg from "../../../assets/shapes/Roundy_Crazy.svg";
import DonutySvg from "../../../assets/shapes/Donuty.svg";
import WavyPattern from '../../../assets/patterns/wavy_pattern.png';
import DiagonalLinePattern from '../../../assets/patterns/diagonal_line_pattern.png';
import { motion, useScroll, useTransform } from "framer-motion";
import useParallax from "../../../hooks/useParallax";

const Work = () => {
    const refWorkCardsDiv = useRef(null);
    const refSection = useRef(null);
    const { scrollYProgress: scrollYProgressSection } = useScroll();
    const { scrollYProgress: scrollYProgressWorkCardsDiv } = useScroll({
        target: refWorkCardsDiv,
        offset: ["-90vh", "end 80vh"]
    });
    const yParallaxXl = useParallax(scrollYProgressSection, 700);
    const yParallaxMd = useParallax(scrollYProgressSection, 400);
    const yParallaxSm = useParallax(scrollYProgressSection, 200);
    const pathLength = useTransform(scrollYProgressWorkCardsDiv, [0, 1], [1, 0]);

    return (
        <SectionWrapper
            ref={refSection}
            id="work"
        >
            {/* background parallax shapes begin */}
            <motion.div
                className="absolute -right-10 top-[15%] w-[15%] h-32"
                style={{ y: yParallaxMd, backgroundImage: `url(${WavyPattern})`, backgroundRepeat: 'repeat', backgroundSize: '40%' }}
            />
            <motion.img
                className="absolute -left-10 top-1/3 md:left-8 z-10"
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

            <h1 className="text-primary font-bold">Work</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="relative w-full mt-5 flex flex-col justify-center gap-10 py-10 md:py-24 md:gap-20 md:px-24 md:mt-24 lg:px-60" ref={refWorkCardsDiv}>
                <LongCurvyArrrowLineSvg pathLength={pathLength} className="absolute inset-0 z-0 h-full w-full" />
                <WorkInformationCard
                    title="Meldeamt"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    thumbnail={MeldeamtWorkThumbnail}
                    className="z-20"
                />
                <WorkInformationCard
                    title="Tim"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    thumbnail={TimWorkThumbnail}
                    className="z-20"
                />
                <WorkInformationCard
                    title="Phone"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    thumbnail={PhoneWorkThumbnail}
                    className="z-20"
                />
            </div>
        </SectionWrapper>
    )
}

export default Work;