import React from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
}

const SectionWrapper = ({ children, id }: SectionWrapperProps) => {
    return (
        <section id={id} className="container relative mx-auto mt-12 px-4 sm:px-0 md:mt-40">
            {children}
        </section>
    );
};

export default SectionWrapper;