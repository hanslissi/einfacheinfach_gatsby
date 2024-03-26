import React from "react";
import Logo from '../../../assets/einfacheinfach_logo_blue.svg';

const Hero = () => {
    return (
        <div className="h-lvh flex justify-center items-center -mt-20">
            <img className="h-12 md:h-20" src={Logo}></img>
        </div>
    )
}

export default Hero;