import clsx from "clsx";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface IconInformationCardProps {
    title: string;
    description: string;
    thumbnail: any;
    className?: string;
}

const IconInformationCard = ({ title, description, thumbnail, className }: IconInformationCardProps) => {
    // component that fades in when coming into view 

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
                duration: 0.3,
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

export default IconInformationCard;