import clsx from "clsx";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { DURATION_FAST } from "../../constants/animation-constants";

interface WorkInformationCardProps {
    title: string;
    description: string;
    thumbnail: any;
    className?: string;
}

const WorkInformationCard = ({ title, description, thumbnail, className }: WorkInformationCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const fadeInVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "easeOut",
                duration: DURATION_FAST,
            }
        },
    };

    const fadeInAnimation = useAnimation();

    useEffect(() => {
        if (isInView) {
            fadeInAnimation.start("visible");
        }
    }, [isInView, fadeInAnimation]);

    return (
        <motion.div
            ref={ref}
            className={clsx("relative aspect-[2] w-full border rounded-xl overflow-hidden", className)}
            variants={fadeInVariants}
            initial="hidden"
            animate={fadeInAnimation}
        >
            <img src={thumbnail} className="object-cover w-full h-full" />
        </motion.div>
    )
}

export default WorkInformationCard;