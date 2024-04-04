import clsx from "clsx";
import { Transition, Variants, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

interface InfinityLoopArrowProps {
    className?: string;
    duration?: number;
    loop?: boolean;
    onAnimationComplete?: () => void;
}

const InfinityLoopArrow = ({
    className,
    duration = 4,
    loop = true,
    onAnimationComplete = () => { }
}: InfinityLoopArrowProps) => {
    const loopAnimation = useAnimation();
    const loopAnimationDelayed = useAnimation();
    const transition: Transition = {
        duration: duration,
        ease: "linear"
    }

    const loopVariants: Variants = {
        start: {
            pathLength: 0.1,
            pathOffset: 0
        },
        end: {
            pathLength: 0.1,
            pathOffset: 1,
            transition: transition
        }
    }

    useEffect(() => {
        loopAnimation.start("end");
        loopAnimationDelayed.start("end", {
            ...transition,
            delay: duration * 0.375
        });
    }, []);

    const handleLoopAnimationComplete = () => {
        if (loop) {
            loopAnimation.set("start");
            loopAnimation.start("end");
        }
    }

    const handleLoopAnimationDelayedComplete = () => {
        onAnimationComplete();
        if (loop) {
            loopAnimationDelayed.set("start");
            loopAnimationDelayed.start("end");
        }
    }

    return (
        <motion.svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 463 183"
            preserveAspectRatio="none"
            className={clsx(className)}
        >
            <motion.path
                stroke="#150FF4"
                stroke-width="3"
                stroke-linecap="round"
                onAnimationComplete={handleLoopAnimationComplete}
                initial={"start"}
                variants={loopVariants}
                animate={loopAnimation}
                d="M256.81,104.93c-13.5-8.98-17.71-11.41-30.24-15.71-19.69-6.74-39.26-9.51-58.17-19.04-24.06-12.13-43.62-29.05-64.39-45.49-2.3-1.82-4.62-3.64-6.96-5.44C84.4,9.48,69.7,1.22,53.72,.54,29.39-.5,5.98,18.53,1.36,42.45c-4.77,24.69,10.74,52.65,34.77,60.82,10.02,3.41,20.8,3.78,31.38,3.79,83.47,.06,165.61-20.61,248.93-25.54,19.01-1.12,38.03-1.3,57.03-1.24,23.49,.08,48.1-1.95,68.4,12.34,9.72,6.84,17.23,17.37,18.66,29.17,1.76,14.52-5.84,28.94-16.59,38.87-13.31,12.3-31.45,18.93-49.56,19.22-22.05,.35-40.31-9-58.91-19.64-21.04-12.04-59.03-41.18-78.66-55.3Z"
            />
            <motion.path
                stroke="#150FF4"
                stroke-width="3"
                stroke-linecap="round"
                onAnimationComplete={handleLoopAnimationDelayedComplete}
                initial={"start"}
                variants={loopVariants}
                animate={loopAnimationDelayed}
                d="M256.81,104.93c-13.5-8.98-17.71-11.41-30.24-15.71-19.69-6.74-39.26-9.51-58.17-19.04-24.06-12.13-43.62-29.05-64.39-45.49-2.3-1.82-4.62-3.64-6.96-5.44C84.4,9.48,69.7,1.22,53.72,.54,29.39-.5,5.98,18.53,1.36,42.45c-4.77,24.69,10.74,52.65,34.77,60.82,10.02,3.41,20.8,3.78,31.38,3.79,83.47,.06,165.61-20.61,248.93-25.54,19.01-1.12,38.03-1.3,57.03-1.24,23.49,.08,48.1-1.95,68.4,12.34,9.72,6.84,17.23,17.37,18.66,29.17,1.76,14.52-5.84,28.94-16.59,38.87-13.31,12.3-31.45,18.93-49.56,19.22-22.05,.35-40.31-9-58.91-19.64-21.04-12.04-59.03-41.18-78.66-55.3Z"
            />
        </motion.svg>
    );
}

export default InfinityLoopArrow;
