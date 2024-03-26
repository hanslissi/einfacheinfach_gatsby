import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "../../wrappers/section-wrapper";
import IconInformationCard from "../icon-information-card";
import QuestionMarkIcon from "../../../assets/question_mark_icon.svg";
import VideoIcon from "../../../assets/video_icon.svg";
import ExclamationMarkIcon from "../../../assets/exclamation_mark_icon.svg";

const Services = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    return (
        <SectionWrapper id="services">
            <div className="flex flex-col items-center gap-12 md:gap-32">
                <h1 ref={ref}>Wir erklären - <br />
                    aber <span className="relative inline-block">
                        einfach einfach!
                        <div className="absolute -bottom-[100%] left-0">
                            <motion.svg className="max-w-[100%]" width="545" height="57" viewBox="0 0 545 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                                    d="M2.29297 17.7656C159.122 14.2162 316.002 11.7953 472.764 5.86895C494.866 5.03339 561.004 0.500601 539.068 3.331C478.808 11.1065 417.121 12.4449 356.654 18.4C321.676 21.8448 273.32 27.0879 236.894 33.1519C229.845 34.3253 222.826 35.7835 215.956 37.7519C203.947 41.1932 211.627 42.3005 219.842 43.6209C279.678 53.2373 341.599 52.3041 402.019 54.883"
                                    stroke="#150FF4"
                                    stroke-width="3"
                                    stroke-linecap="round"
                                    pathLength={scrollYProgress}
                                />
                            </motion.svg>
                        </div>
                    </span>
                </h1>
                <div className="w-full grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 md:grid-cols-3">
                    <IconInformationCard
                        title="Frage"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut?"
                        icon={QuestionMarkIcon}
                    />
                    <IconInformationCard
                        title="Video"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut?"
                        icon={VideoIcon}
                    />
                    <IconInformationCard
                        title="Antwort"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut?"
                        icon={ExclamationMarkIcon}
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Services;