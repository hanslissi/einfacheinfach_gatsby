import React, { useContext, useEffect } from "react";
import Logo from '../../../assets/einfacheinfach_logo_blue.svg';
import { NavContext } from "../../../context/NavContext";
import { useInView } from "framer-motion";
import ScribbleCircleAround from "../../animated-commons/scribble-circle-around";

const Hero = () => {
    const { setSpread, toggleSpread } = useContext(NavContext);
    const [loopingScribbleCircle, setLoopingScribbleCircle] = React.useState<boolean>(true);
    const ref = React.useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) {
            setSpread(false);
        } else {
            setSpread(true);
        }
    }, [isInView])

    const handleClickLogo = () => {
        if (loopingScribbleCircle) {
            setLoopingScribbleCircle(false);
        }
        toggleSpread();
    }

    return (
        <section className="h-lvh flex justify-center items-center -mt-20">
            <div className="relative bg-beige">
                <img
                    ref={ref}
                    className="cursor-pointer h-12 md:h-20"
                    src={Logo}
                    onClick={handleClickLogo}
                />
                <ScribbleCircleAround
                    className="pointer-events-none absolute w-[150%] -left-1/4 -top-1/3"
                    loop={loopingScribbleCircle}
                    delay={3}
                />
            </div>

        </section>
    )
}

export default Hero;