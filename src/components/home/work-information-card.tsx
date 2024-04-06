import clsx from "clsx";
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { DURATION_FAST } from "../../constants/animation-constants";
import { Link } from "gatsby";

interface WorkInformationCardProps {
    title: string;
    description: string;
    url: string;
    thumbnail: any;
    className?: string;
}

const WorkInformationCard = ({ title, description, url, thumbnail, className }: WorkInformationCardProps) => {
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
        <Link to={url}>
            <motion.div
                ref={ref}
                className={clsx("relative aspect-[2] w-full border rounded-xl overflow-hidden", className)}
                variants={fadeInVariants}
                initial="hidden"
                animate={fadeInAnimation}
            >
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-20 text-white text-center bg-gradient-to-b from-primary to-transparent"
                    whileHover={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                >
                    <h2 className="font-bold">{title}</h2>
                    <p>{description}</p>
                </motion.div>
                <img src={thumbnail} className="object-cover w-full h-full" />
            </motion.div>
        </Link>
    )
}

export default WorkInformationCard;