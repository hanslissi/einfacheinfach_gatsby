import React, { useEffect } from 'react';
import { Variants, motion, useAnimation } from 'framer-motion';

interface CharSpreaderSpanProps {
    text: string;
    spread: boolean;
    calculateSpreadOutValues: () => { x: number | string, y: number | string, rotate: number };
}

const CharSpreaderSpan = ({ text, spread, calculateSpreadOutValues }: CharSpreaderSpanProps) => {
    const spreadOutAnimation = useAnimation();

    useEffect(() => {
        spreadOutAnimation.start(spread ? "spreadOut" : "gather");
    }, [spread]);

    const randomLetterVariant = (): Variants => {
        return {
            spreadOut: {
                ...calculateSpreadOutValues(),
                transition: {
                    type: "easeOut",
                    duration: 0.3,
                }
            },
            gather: {
                x: 0,
                y: 0,
                rotate: 0,
                transition: {
                    type: "easeOut",
                    duration: 0.3,
                }
            }
        }
    }

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