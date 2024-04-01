import React, { useRef } from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import CharacterCard from "../character-card";
import { Variants, motion, useAnimation, useScroll } from "framer-motion";
import useParallax from "../../../hooks/useParallax";
import StarySvg from "../../../assets/shapes/Stary.svg";
import DonutySvg from "../../../assets/shapes/Donuty.svg";
import WavingHandImg from "../../../assets/waving_hand.png";
import RoundyCrazySvg from "../../../assets/shapes/Roundy_Crazy.svg";
import JonnyCharacterImg from "../../../assets/pictures/characters/jonny.png";

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
                <div className="w-full grid grid-cols-3 gap-4 md:grid-cols-6 lg:px-20">
                    <CharacterCard
                        name="Jonny"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Betti"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Rafa"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Hannah"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Nici"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Beyza"
                        characterImg={JonnyCharacterImg}
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