import React, { useContext, useEffect } from "react";
import Logo from '../../../assets/einfacheinfach_logo_blue.svg';
import { NavContext } from "../../../context/NavContext";
import { useInView } from "framer-motion";

const Hero = () => {
    const { setSpread, toggleSpread } = useContext(NavContext);
    const ref = React.useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log(isInView)
        if (!isInView) {
            setSpread(false);
        } else {
            setSpread(true);
        }
    }, [isInView])


    return (
        <section className="h-lvh flex justify-center items-center -mt-20">
            <img
                ref={ref}
                className="cursor-pointer h-12 md:h-20"
                src={Logo}
                onClick={toggleSpread}
            />
        </section>
    )
}

export default Hero;