import React, { useContext, useEffect } from "react";
import Logo from '../../../assets/einfacheinfach_logo_blue.svg';
import { NavContext } from "../../../context/NavContext";
import { Variants, motion, useInView } from "framer-motion";
import ScribbleCircleAround from "../../animated-commons/scribble-circle-around";

const Hero = () => {
    const { spread, scrollSpreadLocked, toggleSpread, setSpread } = useContext(NavContext);
    const ref = React.useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) {
            setSpread(false);
        } else if (!scrollSpreadLocked) {
            setSpread(true);
        }
    }, [isInView])

    const handleClickLogo = () => {
        toggleSpread(true); // lock the scroll spread when clicking logo once.
    }

    const logoVariants: Variants = {
        idle: {
            scale: 1,
            transition: {
                type: "spring",
                bounce: 0.6,
                duration: 0.5
            }
        },
        hover: {
            scale: 1.1,
            transition: {
                type: "spring",
                bounce: 0.6,
                duration: 0.5
            }
        }
    }

    return (
        <section className="h-lvh flex justify-center items-center -mt-20">
            <motion.button 
                className="relative bg-beige"
                onClick={handleClickLogo}
                variants={logoVariants}
                animate="idle"
                whileTap="idle"
                whileHover="hover"
            >
                <img
                    ref={ref}
                    className="h-12 md:h-20"
                    src={Logo}
                />
                <ScribbleCircleAround
                    className="pointer-events-none absolute w-[150%] -left-1/4 -top-1/3"
                    loop={spread}
                    delay={2}
                />
            </motion.button>

        </section>
    )
}

export default Hero;