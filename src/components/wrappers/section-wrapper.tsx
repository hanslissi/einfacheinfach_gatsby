import React, { forwardRef } from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
    ({ children, id }: SectionWrapperProps, ref) => {
        return (
            <section ref={ref} id={id} className="container relative mx-auto mt-12 px-4 sm:px-0 md:mt-40">
                {children}
            </section>
        );
    }
);

export default SectionWrapper;