import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
    return (
        <section className="h-lvh flex justify-center items-center -mt-20">
            <div className="h-12 md:h-20">
                <StaticImage
                    src={"../../../assets/einfacheinfach_logo_blue.svg"}
                    alt="Logo"
                />
            </div>

        </section>
    )
}

export default Hero;