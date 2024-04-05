import React, { useRef, useState } from 'react';
import SectionWrapper from '../../wrappers/section-wrapper';
import { Variants, motion, useAnimation, useInView } from 'framer-motion';
import { DURATION_FAST, DURATION_SLOW } from '../../../constants/animation-constants';
import InfinityLoopArrow from '../../animated-commons/infinity-loop-arrow';
import { Link } from 'gatsby';

const scribbleUnderlineVariants: Variants = {
    hidden: {
        pathLength: 0,
        transition: {
            ease: "easeInOut",
            duration: DURATION_FAST
        }
    },
    visible: {
        pathLength: 1,
        transition: {
            ease: "easeInOut",
            duration: DURATION_SLOW
        }
    }
}

const HireCTA = () => {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <SectionWrapper id="hire" className="pb-20 md:pb-32">
            <div className="flex flex-col items-center justify-center gap-10">
                <h3 ref={ref} className="relative text-center">
                    Interessiert?
                    <div className="absolute -bottom-[100%] left-0">
                        <motion.svg className="max-w-[100%]" width="286.27" height="45.66" viewBox="0 0 286.27 45.66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                d="M285.77,1.17c-46.92-1.24-93.94-.52-140.9,.2C104.48,1.99,63.58,.72,23.56,4.15c-5.89,.5-17.05,1.08-21.55,3.08-.89,.4-1.7,.95-1.48,1.54,.31,.8,2.24,1.11,3.85,1.24,19.26,1.57,39.55,1.39,59.06,2.18,24.03,.96,48.03,2.1,71.95,3.55,14.52,.88,28.93,2,42.33,5.07,6.72,1.54-3.11,2.86-5.45,3.22-5.93,.92-12.04,1.53-17.85,2.63-8.43,1.6-22.6,4.23-28.2,7.96-3.86,2.57-1.75,5.33,2.98,7.04,3.48,1.26,7.68,2.02,10.79,3.5"
                                stroke="#150FF4"
                                strokeWidth="3"
                                strokeLinecap="round"
                                variants={scribbleUnderlineVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                            />
                        </motion.svg>
                    </div>
                </h3>
                <div className="relative p-16">
                    <InfinityLoopArrow
                        className="absolute w-full inset-0 transform scale-105 origin-center md:scale-150"
                        duration={4}
                    />
                    <Link
                        to="/hire-us"
                        className="relative whitespace-nowrap max-w-full bg-primary text-white px-20 py-10 rounded-3xl text-2xl md:text-4xl"
                    >
                        Anfrage schicken!
                    </Link>

                </div>
            </div>
        </SectionWrapper>
    );
}

export default HireCTA;