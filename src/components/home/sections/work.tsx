import React from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import WorkInformationCard from "../work-information-card";
import MeldeamtWorkThumbnail from "../../../assets/pictures/works/meldeamt_work_thumbnail.png";
import TimWorkThumbnail from "../../../assets/pictures/works/tim_work_thumbnail.png";
import PhoneWorkThumbnail from "../../../assets/pictures/works/phone_work_thumbnail.png";

const Work = () => {
    return (
        <SectionWrapper>
            <h1 className="text-primary font-bold" id="work">Work</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex flex-col gap-10 items-center px-12 mt-24">
                <div className="w-full flex flex-col justify-center gap-20">
                    <WorkInformationCard
                        title="Meldeamt"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        thumbnail={MeldeamtWorkThumbnail}
                    />
                    <WorkInformationCard
                        title="Tim"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        thumbnail={TimWorkThumbnail}
                    />
                    <WorkInformationCard
                        title="Phone"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        thumbnail={PhoneWorkThumbnail}
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Work;