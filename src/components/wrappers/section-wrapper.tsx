import React from "react";

interface SectionWrapper {
    children: React.ReactNode
}

const SectionWrapper = ({children}: SectionWrapper) => {
    return (
        <div className="container mx-auto mt-10">
            {children}
        </div>
    )
}

export default SectionWrapper;