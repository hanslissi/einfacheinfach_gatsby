import React, { useEffect } from "react";
import { Variants, motion, useAnimation } from "framer-motion";
import {
  DURATION_FAST,
  DURATION_MEDIUM,
} from "../../constants/animation-constants";

interface CharSpreaderSpanProps {
  text: string;
  spread: boolean;
  calculateSpreadOutValues: () => {
    x: number | string;
    y: number | string;
    rotate: number;
  };
}

const CharSpreaderSpan = ({
  text,
  spread,
  calculateSpreadOutValues,
}: CharSpreaderSpanProps) => {
  const spreadOutAnimation = useAnimation();

  useEffect(() => {
    spreadOutAnimation.start(spread ? "spreadOut" : "gather");
  }, [spread]);

  const randomLetterVariant = (): Variants => {
    return {
      spreadOut: {
        ...calculateSpreadOutValues(),
        transition: {
          type: "spring",
          duration: DURATION_MEDIUM,
        },
      },
      gather: {
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
          type: "easeInOut",
          duration: DURATION_FAST,
        },
      },
    };
  };

  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={spreadOutAnimation}
          variants={randomLetterVariant()}
          initial="spreadOut"
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
};

export default CharSpreaderSpan;
