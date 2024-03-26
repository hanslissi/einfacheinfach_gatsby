import React from "react";

interface SectionWrapper {
    children: React.ReactNode
}

const SectionWrapper = ({children}: SectionWrapper) => {
    return (
        <div className="container relative mx-auto mt-12 px-4 sm:px-0 md:mt-40">
            {children}
        </div>
    )
}

export default SectionWrapper;