import React from "react";
import Logo from '../../../assets/einfacheinfach_logo_blue.svg';

const Hero = () => {
    return (
        <section className="h-lvh flex justify-center items-center -mt-20">
            <img className="h-12 md:h-20" src={Logo}></img>
        </section>
    )
}

export default Hero;