import React from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import IconInformationCard from "../icon-information-card";
import QuestionMarkIcon from "../../../assets/question_mark_icon.svg";
import VideoIcon from "../../../assets/video_icon.svg";
import ExclamationMarkIcon from "../../../assets/exclamation_mark_icon.svg";
import UnderlineScribbleBigSvg from "../../../assets/underline_scribble_big.svg";

const Services = () => {
    return (
        <SectionWrapper>
            <div className="flex flex-col items-center gap-16 md:32">
                <h1 id="services">Wir erklären - <br />
                    aber <span className="relative inline-block">
                        einfach einfach!
                        <img src={UnderlineScribbleBigSvg} className="absolute -bottom-[80%] left-0" />
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