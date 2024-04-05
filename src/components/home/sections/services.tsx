import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";
import ExclamationMarkIcon from "../../../assets/exclamation_mark_icon.svg";
import QuestionMarkIcon from "../../../assets/question_mark_icon.svg";
import VideoIcon from "../../../assets/video_icon.svg";
import SectionWrapper from "../../wrappers/section-wrapper";
import IconInformationCard from "../icon-information-card";
import DirectionArrowDownLeft from "../../animated-commons/direction-arrow-down-left";
import DirectionArrowDownRight from "../../animated-commons/direction-arrow-down-right";

const Services = () => {
    const refHeadline = useRef(null);
    const refSecondCard = useRef(null);
    const refThirdCard = useRef(null);
    const secondCardInView = useInView(refSecondCard);
    const thirdCardInView = useInView(refThirdCard);
    const { scrollYProgress } = useScroll({
        target: refHeadline,
        offset: ["end end", "start start"]
    });

    return (
        <SectionWrapper id="services">
            <div className="flex flex-col items-center gap-12 md:gap-32">
                <h1 ref={refHeadline}>Wir erklären - <br />
                    aber <span className="relative inline-block">
                        einfach einfach!
                        <div className="absolute -bottom-[100%] left-0">
                            <motion.svg className="max-w-[100%]" width="545" height="57" viewBox="0 0 545 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    d="M2.29297 17.7656C159.122 14.2162 316.002 11.7953 472.764 5.86895C494.866 5.03339 561.004 0.500601 539.068 3.331C478.808 11.1065 417.121 12.4449 356.654 18.4C321.676 21.8448 273.32 27.0879 236.894 33.1519C229.845 34.3253 222.826 35.7835 215.956 37.7519C203.947 41.1932 211.627 42.3005 219.842 43.6209C279.678 53.2373 341.599 52.3041 402.019 54.883"
                                    stroke="#150FF4"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    pathLength={scrollYProgress}
                                />
                            </motion.svg>
                        </div>
                    </span>
                </h1>
                <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
                    <IconInformationCard
                        className="relative z-40"
                        title="Frage"
                        description="Ist Ihre Zielgruppe verwirrt? Hat sie Fragen über Ihre Services? Suchen sie nach klaren und schnellen Antworten?"
                        icon={QuestionMarkIcon}
                    >
                        <DirectionArrowDownLeft
                            className="absolute h-[150px] -left-6 -bottom-20 md:transform md:-rotate-90 md:-bottom-16 md:left-3/4 lg:h-[12vw] z-30"
                            show={secondCardInView}
                        />
                    </IconInformationCard>
                    <div ref={refSecondCard}>
                        <IconInformationCard
                            className="relative z-20"
                            title="Video"
                            description="Unsere Videos machen komplexe Themen einfach! In kürzester Zeit und auf unterhaltsame Weise erklärt."
                            icon={VideoIcon}
                        >
                            <DirectionArrowDownRight
                                className="absolute h-[150px] -right-6 -bottom-20 md:transform md:-rotate-90 md:-top-14 md:left-3/4 lg:h-[12vw] z-10"
                                show={thirdCardInView}
                            />
                        </IconInformationCard>
                    </div>
                    <div ref={refThirdCard}>
                        <IconInformationCard
                            title="Antwort"
                            description="Nach dem Anschauen unserer Videos verstehen deine Kunden alles – klar, einfach und ohne Missverständnisse!"
                            icon={ExclamationMarkIcon}
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Services;