import React from "react";
import SectionWrapper from "../../wrappers/section-wrapper";

const Work = () => {
    return (
        <SectionWrapper>
            <div className="flex flex-col gap-10 items-center">
                <h1>Work</h1>
                <div className="w-full flex flex-col justify-center gap-20">
                    <div className="aspect-[2] w-full border rounded-lg bg-secondary"></div>
                    <div className="aspect-[2] w-full border rounded-lg bg-secondary"></div>
                    <div className="aspect-[2] w-full border rounded-lg bg-secondary"></div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Work;