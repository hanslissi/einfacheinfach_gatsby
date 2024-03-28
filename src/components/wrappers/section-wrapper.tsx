import clsx from "clsx";
import React, { forwardRef } from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
    ({ children, id, className }: SectionWrapperProps, ref) => {
        return (
            <section ref={ref} id={id} className={clsx("container relative mx-auto mt-12 px-4 sm:px-0 md:mt-40", className)}>
                {children}
            </section>
        );
    }
);

export default SectionWrapper;