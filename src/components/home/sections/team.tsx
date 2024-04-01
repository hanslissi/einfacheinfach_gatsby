import React, { useRef } from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import CharacterCard from "../character-card";
import { Variants, motion, useAnimation, useScroll } from "framer-motion";
import useParallax from "../../../hooks/useParallax";
import StarySvg from "../../../assets/shapes/Stary.svg";
import DonutySvg from "../../../assets/shapes/Donuty.svg";
import WavingHandImg from "../../../assets/waving_hand.png";
import RoundyCrazySvg from "../../../assets/shapes/Roundy_Crazy.svg";
import JonnyCharacterImg from "../../../assets/pictures/characters/jonny.svg";
import BettiCharacterImg from "../../../assets/pictures/characters/betti.svg";
import BeyzaCharacterImg from "../../../assets/pictures/characters/beyza.svg";
import NiciCharacterImg from "../../../assets/pictures/characters/nici.svg";
import RaffaCharacterImg from "../../../assets/pictures/characters/raffa.svg";
import HannahCharacterImg from "../../../assets/pictures/characters/hannah.svg";
import JonnyPortraitImg from '../../../assets/pictures/team/jonny.jpg';
import BettiPortraitImg from '../../../assets/pictures/team/betti.jpg';
import BeyzaPortraitImg from '../../../assets/pictures/team/beyza.jpg';
import NiciPortraitImg from '../../../assets/pictures/team/nici.jpg';
import RaffaPortraitImg from '../../../assets/pictures/team/raffa.jpg';
import HannahPortraitImg from '../../../assets/pictures/team/hannah.jpg';

const Team = () => {
    const refSection = useRef(null);
    const wavingAnimationController = useAnimation();
    const { scrollYProgress: scrollYProgressSection } = useScroll();
    const yParallaxXl = useParallax(scrollYProgressSection, 700);
    const yParallaxMd = useParallax(scrollYProgressSection, 400, true);

    const waveVariants: Variants = {
        idle: {
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.7,
                duration: 1
            }
        },
        hover: {
            rotate: 10,
            transition: {
                type: "spring",
                bounce: 0.7,
                duration: 1
            }
        }
    }

    const handleHoverStartWaveButton = () => {
        wavingAnimationController.start("hover");
    }

    const handleHoverEndWaveButton = () => {
        wavingAnimationController.start("idle");
    }

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

            <div className="flex flex-col gap-20 mt-20 items-center">
                <h1>Unser {" "}
                    <span className="relative z-10">
                        Team

                        {/* shapes begin */}
                        <motion.img
                            className="absolute -right-9 top-1/3"
                            src={StarySvg}
                            style={{ rotate: yParallaxXl }}
                        />
                        <motion.img
                            className="absolute h-10 -left-6 top-0 -z-10"
                            src={StarySvg}
                            style={{ rotate: yParallaxMd }}
                        />
                        <div className="absolute h-[5px] aspect-square rounded-full bg-black -right-8 -bottom-5 " />
                        {/* shapes end */}

                    </span>
                </h1>
                <div className="w-full grid grid-cols-3 h-[500px] gap-4 md:grid-cols-6 lg:px-20">
                    <CharacterCard
                        name="Jonny"
                        characterImg={JonnyCharacterImg}
                        portraitImg={JonnyPortraitImg}
                    />
                    <CharacterCard
                        name="Betti"
                        characterImg={BettiCharacterImg}
                        portraitImg={BettiPortraitImg}
                    />
                    <CharacterCard
                        name="Raffa"
                        characterImg={RaffaCharacterImg}
                        portraitImg={RaffaPortraitImg}
                    />
                    <CharacterCard
                        name="Hannah"
                        characterImg={HannahCharacterImg}
                        portraitImg={HannahPortraitImg}
                    />
                    <CharacterCard
                        name="Nici"
                        characterImg={NiciCharacterImg}
                        portraitImg={NiciPortraitImg}
                    />
                    <CharacterCard
                        name="Beyza"
                        characterImg={BeyzaCharacterImg}
                        portraitImg={BeyzaPortraitImg}
                    />
                </div>
                <button
                    className="text-2xl"
                    onMouseEnter={handleHoverStartWaveButton}
                    onMouseLeave={handleHoverEndWaveButton}
                >
                    Wave to the team
                    <motion.img
                        src={WavingHandImg}
                        className="h-14 inline-block"
                        variants={waveVariants}
                        animate={wavingAnimationController}
                    />
                </button>
            </div>
        </SectionWrapper>
    )
}

export default Team;