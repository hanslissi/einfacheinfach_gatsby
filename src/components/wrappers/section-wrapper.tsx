import React from "react";

interface SectionWrapper {
    children: React.ReactNode
}

const SectionWrapper = ({children}: SectionWrapper) => {
    return (
        <div className="container mx-auto mt-40">
            {children}
        </div>
    )
}

export default SectionWrapper;