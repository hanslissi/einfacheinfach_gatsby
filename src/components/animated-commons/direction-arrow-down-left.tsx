import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import React from "react";
import { DURATION_MEDIUM, DURATION_SLOW } from "../../constants/animation-constants";

interface DirectionArrowDownLeftProps {
    className?: string;
    show: boolean;
}

const lineVariants: Variants = {
    hidden: {
        pathLength: 0,
        transition: {
            ease: "easeInOut",
            duration: DURATION_MEDIUM
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

const DirectionArrowDownLeft = ({ className, show = true }: DirectionArrowDownLeftProps) => {
    return (
        <motion.svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 195 220"
            preserveAspectRatio="none"
            className={clsx(className)}
        >
            <motion.path
                stroke="#150FF4"
                stroke-width="3"
                stroke-linecap="round"
                strokeDasharray={"4 8"}
                d="M60.83,213.94C24.44,188.47-.94,145.61,.56,101.21S40.14-16.38,192.92,4.01"
            />
            <motion.path
                stroke="#FFFCEF"
                stroke-width="4"
                stroke-linecap="round"
                initial={"visible"}
                variants={lineVariants}
                animate={show ? "hidden" : "visible"}
                d="M60.83,213.94C24.44,188.47-.94,145.61,.56,101.21S40.14-16.38,192.92,4.01"
            />
            <motion.path
                stroke="#150FF4"
                stroke-width="3"
                stroke-linecap="round"
                initial={"hidden"}
                variants={lineVariants}
                className={!show ? "hidden" : ""}
                animate={show ? "visible" : "hidden"}
                d="M55.86,216.88c2.71,.02,5.42-.25,8.06-.81,.11-2.45,0-4.91-.31-7.34"
            />
        </motion.svg>
    );
}

export default DirectionArrowDownLeft;
