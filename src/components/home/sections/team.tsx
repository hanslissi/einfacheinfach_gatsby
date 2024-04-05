import React, { useRef } from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import CharacterCard from "../character-card";
import { motion, useScroll } from "framer-motion";
import useParallax from "../../../hooks/useParallax";
import StarySvg from "../../../assets/shapes/Stary.svg";
import DonutySvg from "../../../assets/shapes/Donuty.svg";
import RoundyCrazySvg from "../../../assets/shapes/Roundy_Crazy.svg";
import JonnyCharacterImg from "../../../assets/pictures/characters/jonny_character.svg";
import BettiCharacterImg from "../../../assets/pictures/characters/betti_character.svg";
import BeyzaCharacterImg from "../../../assets/pictures/characters/beyza_character.svg";
import NiciCharacterImg from "../../../assets/pictures/characters/nici_character.svg";
import RaffaCharacterImg from "../../../assets/pictures/characters/raffa_character.svg";
import HannahCharacterImg from "../../../assets/pictures/characters/hannah_character.svg";
import JonnyPortraitImg from '../../../assets/pictures/team/jonny.jpg';
import BettiPortraitImg from '../../../assets/pictures/team/betti.jpg';
import BeyzaPortraitImg from '../../../assets/pictures/team/beyza.jpg';
import NiciPortraitImg from '../../../assets/pictures/team/nici.jpg';
import RaffaPortraitImg from '../../../assets/pictures/team/raffa.jpg';
import HannahPortraitImg from '../../../assets/pictures/team/hannah.jpg';

const Team = () => {
    const refSection = useRef(null);
    const { scrollYProgress: scrollYProgressSection } = useScroll();
    const yParallaxXl = useParallax(scrollYProgressSection, 700);
    const yParallaxMd = useParallax(scrollYProgressSection, 400, true);

    return (
        <SectionWrapper ref={refSection} id="about">

            {/* parallax shapes begin */}
            <motion.img
                className="absolute hidden md:block -right-20 -top-2/4 h-60"
                src={DonutySvg}
                style={{ y: yParallaxXl }}
            />

            <motion.img
                className="absolute -left-10 -bottom-60"
                src={RoundyCrazySvg}
                style={{ y: yParallaxXl, rotate: yParallaxMd }}
            />
            {/* parallax shapes end */}

            <div className="flex flex-col gap-10 lg:gap-20 mt-20 items-center">
                <h1>Unser {" "}
                    <span className="relative z-10">
                        Team

                        {/* shapes begin */}
                        <motion.img
                            className="absolute -right-[0.6em] top-1/3 h-[1.2em]"
                            src={StarySvg}
                            style={{ rotate: yParallaxXl }}
                        />
                        <motion.img
                            className="absolute -left-[0.3em] top-0 h-[0.6em] -z-10"
                            src={StarySvg}
                            style={{ rotate: yParallaxMd }}
                        />
                        <div className="absolute h-[5px] aspect-square rounded-full bg-black -right-8 -bottom-5 " />
                        {/* shapes end */}

                    </span>
                </h1>
                <div className="w-full grid grid-cols-3 gap-6 lg:grid-cols-6 md:gap-20 lg:gap-4 lg:px-20">
                    <CharacterCard
                        name="Jonny"
                        role="Web Developer"
                        characterImg={JonnyCharacterImg}
                        portraitImg={JonnyPortraitImg}
                    />
                    <CharacterCard
                        name="Betti"
                        role="Animator"
                        characterImg={BettiCharacterImg}
                        portraitImg={BettiPortraitImg}
                    />
                    <CharacterCard
                        name="Raffa"
                        role="Screen Design"
                        characterImg={RaffaCharacterImg}
                        portraitImg={RaffaPortraitImg}
                    />
                    <CharacterCard
                        name="Hannah"
                        role="Branding"
                        characterImg={HannahCharacterImg}
                        portraitImg={HannahPortraitImg}
                    />
                    <CharacterCard
                        name="Nici"
                        role="DoP"
                        characterImg={NiciCharacterImg}
                        portraitImg={NiciPortraitImg}
                    />
                    <CharacterCard
                        name="Beyza"
                        role="Social Media"
                        characterImg={BeyzaCharacterImg}
                        portraitImg={BeyzaPortraitImg}
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Team;