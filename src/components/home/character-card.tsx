import React from 'react';
import CrossPattern from '../../assets/patterns/cross_pattern.png';
import DiagonalLinePattern from '../../assets/patterns/diagonal_line_pattern.png';
import GridPattern from '../../assets/patterns/grid_pattern.png';
import WavyPattern from '../../assets/patterns/wavy_pattern.png';
import { getRandomElement } from '../../util/array-utils';
import { Variants, motion, useAnimation } from 'framer-motion';

interface CharacterCardProps {
    name: string;
    characterImg: any;
    portraitImg: any;
}

const patterns = [CrossPattern, DiagonalLinePattern, GridPattern, WavyPattern];

const CharacterCard = ({ name, characterImg, portraitImg }: CharacterCardProps) => {
    const cardFrontAnimationController = useAnimation();
    const cardBackAnimationController = useAnimation();

    const cardFrontVariants: Variants = {
        idle: {
            rotateY: 0,
            transition: {
                ease: "easeOut",
                delay: 0.2
            }
        },
        tapped: {
            rotateY: 90,
            transition: {
                ease: "easeIn",
                duration: 0.2
            }
        }
    }

    const cardBackVariants: Variants = {
        idle: {
            rotateY: 90,
            transition: {
                ease: "easeIn",
                duration: 0.2
            }
        },
        tapped: {
            rotateY: 0,
            transition: {
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    const handleClickCardFront = () => {
        cardFrontAnimationController.start("tapped");
        cardBackAnimationController.start("tapped");
    }

    const handleClickCardBack = () => {
        cardFrontAnimationController.start("idle");
        cardBackAnimationController.start("idle");
    }

    return (
        <div className="relative cursor-pointer w-full h-full">
            <motion.div
                className="absolute w-full h-full bg-beige border"
                variants={cardFrontVariants}
                animate={cardFrontAnimationController}
                onClick={handleClickCardFront}
                initial="idle"
            >
                <div className="relative w-full h-full">
                    <div
                        className="absolute left-0 top-0 w-full h-[30%] opacity-20"
                        style={{ backgroundImage: `url(${getRandomElement(patterns)})`, backgroundRepeat: 'repeat', backgroundSize: '40%' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-beige"></div>
                    </div>
                    <img
                        className="absolute h-full left-1/2 transform -translate-x-1/2 scale-110 origin-center"
                        src={characterImg}
                        alt={name}
                    />
                </div>

            </motion.div>
            <motion.div
                className="absolute w-full h-full border"
                style={{ backgroundImage: `url(${portraitImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                variants={cardBackVariants}
                animate={cardBackAnimationController}
                onClick={handleClickCardBack}
                initial="idle"
            >
                <div className="relative w-full h-full">
                    <div className="relative p-2 flex flex-row gap-2 items-center lg:gap-4 lg:p-4">
                        <h2 className="font-bold">{name}</h2>
                        <hr className="border w-full"></hr>
                    </div>
                </div>
            </motion.div>
        </div>

    );
};

export default CharacterCard;