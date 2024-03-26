import React, { useRef } from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import WorkInformationCard from "../work-information-card";
import MeldeamtWorkThumbnail from "../../../assets/pictures/works/meldeamt_work_thumbnail.png";
import TimWorkThumbnail from "../../../assets/pictures/works/tim_work_thumbnail.png";
import PhoneWorkThumbnail from "../../../assets/pictures/works/phone_work_thumbnail.png";
import LongCurvyArrrowLineSvg from "../../svg/long-curvy-arrow-line";
import { useScroll, useTransform } from "framer-motion";

const Work = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["-90vh", "end 80vh"]
    });
    const pathLength = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <SectionWrapper>
            <h1 className="text-primary font-bold" id="work">Work</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="relative w-full mt-5 flex flex-col justify-center gap-10 py-10 md:py-24 md:gap-20 md:px-12 md:mt-24" ref={scrollRef}>
                <LongCurvyArrrowLineSvg pathLength={pathLength} className="absolute inset-0 z-0 h-full w-full" />
                <WorkInformationCard
                    title="Meldeamt"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    thumbnail={MeldeamtWorkThumbnail}
                    className="z-10"
                />
                <WorkInformationCard
                    title="Tim"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    thumbnail={TimWorkThumbnail}
                    className="z-10"
                />
                <WorkInformationCard
                    title="Phone"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    thumbnail={PhoneWorkThumbnail}
                    className="z-10"
                />
            </div>
        </SectionWrapper>
    )
}

export default Work;