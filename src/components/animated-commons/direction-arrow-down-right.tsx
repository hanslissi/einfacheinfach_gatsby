import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import React from "react";
import { DURATION_MEDIUM, DURATION_SLOW } from "../../constants/animation-constants";

interface DirectionArrowDownRightProps {
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

const DirectionArrowDownRight = ({ className, show = true }: DirectionArrowDownRightProps) => {
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
                d="M132.16,213.94c36.39-25.47,61.77-68.33,60.27-112.73C190.93,56.81,152.85-16.38,.07,4.01"
            />
            <motion.path
                stroke="#FFFCEF"
                stroke-width="4"
                stroke-linecap="round"
                initial={"visible"}
                variants={lineVariants}
                animate={show ? "hidden" : "visible"}
                d="M132.16,213.94c36.39-25.47,61.77-68.33,60.27-112.73C190.93,56.81,152.85-16.38,.07,4.01"
            />
            <motion.path
                stroke="#150FF4"
                stroke-width="3"
                stroke-linecap="round"
                initial={"hidden"}
                variants={lineVariants}
                className={!show ? "hidden" : ""}
                animate={show ? "visible" : "hidden"}
                d="M129.38,208.73c-.31,2.43-.42,4.89-.31,7.34,2.64,.56,5.35,.83,8.06,.81"
            />
        </motion.svg>
    );
}

export default DirectionArrowDownRight;
