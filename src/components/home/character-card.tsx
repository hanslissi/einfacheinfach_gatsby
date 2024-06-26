import React, { useMemo } from "react";
import CrossPattern from "../../assets/patterns/cross_pattern.svg";
import DiagonalLinePattern from "../../assets/patterns/diagonal_line_pattern.svg";
import GridPattern from "../../assets/patterns/grid_pattern.svg";
import WavyPattern from "../../assets/patterns/wavy_pattern.svg";
import { getRandomElement } from "../../util/arrayUtils";
import {
  DURATION_SUPERFAST,
  DURATION_FAST,
} from "../../constants/animation-constants";
import { Variants, motion } from "framer-motion";

interface CharacterCardProps {
  name: string;
  role: string;
  characterImg: any;
  portraitImg: any;
}

const patterns = [CrossPattern, DiagonalLinePattern, GridPattern, WavyPattern];

const cardFrontVariants: Variants = {
  idle: {
    rotateY: 0,
    transition: {
      ease: "easeOut",
      delay: DURATION_FAST,
    },
  },
  tapped: {
    rotateY: 90,
    transition: {
      ease: "easeIn",
      duration: DURATION_FAST,
    },
  },
};

const cardBackVariants: Variants = {
  idle: {
    rotateY: 90,
    transition: {
      ease: "easeIn",
      duration: DURATION_FAST,
    },
  },
  tapped: {
    rotateY: 0,
    transition: {
      ease: "easeOut",
      delay: DURATION_FAST,
    },
  },
};

const characterImgVariants: Variants = {
  idle: {
    scale: 1.1,
    transition: {
      ease: "easeOut",
      delay: DURATION_FAST,
      duration: DURATION_FAST,
    },
  },
  tapped: {
    scale: 0.9,
    transition: {
      ease: "easeIn",
      duration: DURATION_FAST,
    },
  },
};

const fontVariants: Variants = {
  idle: {
    opacity: 0,
    x: -10,
    transition: {
      ease: "easeOut",
      duration: DURATION_FAST,
    },
  },
  tapped: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: DURATION_FAST,
    },
  },
};

const lineVariants: Variants = {
  idle: {
    width: "0%",
    transition: {
      ease: "easeOut",
      duration: DURATION_FAST,
    },
  },
  tapped: {
    width: "100%",
    transition: {
      ease: "easeOut",
      duration: DURATION_FAST,
    },
  },
};

const staggerAnimation: Variants = {
  idle: {
    transition: {
      staggerChildren: 0,
    },
  },
  tapped: {
    transition: {
      delayChildren: DURATION_FAST,
      staggerChildren: DURATION_SUPERFAST,
    },
  },
};

const CharacterCard = ({
  name,
  role,
  characterImg,
  portraitImg,
}: CharacterCardProps) => {
  const [tapped, setTapped] = React.useState(false);
  const randomPattern = useMemo(() => getRandomElement(patterns), []);

  const handleClickCardFront = () => {
    setTapped(true);
  };

  const handleClickCardBack = () => {
    setTapped(false);
  };

  return (
    <div className="relative cursor-pointer w-full aspect-[2/5]">
      <motion.div
        className="absolute w-full h-full bg-beige border"
        variants={cardFrontVariants}
        animate={tapped ? "tapped" : "idle"}
        onClick={handleClickCardFront}
        initial="idle"
      >
        <div className="relative w-full h-full">
          <div
            className="absolute left-0 top-0 w-full h-[30%] opacity-20"
            style={{
              backgroundImage: `url(${randomPattern})`,
              backgroundRepeat: "repeat",
              backgroundSize: "40%",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-beige"></div>
          </div>
          <div className="absolute h-full w-full left-1/2 transform -translate-x-1/2">
            <motion.img
              className="mx-auto h-full"
              src={characterImg}
              alt={name}
              variants={characterImgVariants}
              animate={tapped ? "tapped" : "idle"}
              initial="idle"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute w-full h-full border"
        style={{
          backgroundImage: `url(${portraitImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={cardBackVariants}
        animate={tapped ? "tapped" : "idle"}
        onClick={handleClickCardBack}
        initial="idle"
      >
        <motion.div
          className="w-full h-full p-2 xl:p-4 flex flex-col"
          variants={staggerAnimation}
          initial="idle"
          animate={tapped ? "tapped" : "idle"}
        >
          <div className="flex flex-row gap-1 items-center md:gap-2 xl:gap-4">
            <motion.h2
              className="font-bold text-base sm:text-2xl xl:text-4xl"
              variants={fontVariants}
            >
              {name}
            </motion.h2>
            <motion.hr
              className="border-[0.5px] w-full"
              variants={lineVariants}
            ></motion.hr>
          </div>
          <div className="flex flex-row gap-1 items-center md:gap-2 xl:gap-4">
            <motion.hr
              className="border-[0.5px] w-full"
              variants={lineVariants}
            ></motion.hr>
            <motion.div
              className="whitespace-nowrap text-[0.6rem] sm:text-xs xl:text-base"
              variants={fontVariants}
            >
              {role}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CharacterCard;
