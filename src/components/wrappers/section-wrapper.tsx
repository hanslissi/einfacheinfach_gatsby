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
      <section
        ref={ref}
        id={id}
        className={clsx("relative mx-auto scroll-my-20", className)}
      >
        {children}
      </section>
    );
  },
);

export default SectionWrapper;
