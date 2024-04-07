import clsx from "clsx";
import {
  AnimationDefinition,
  MotionValue,
  Variants,
  motion,
} from "framer-motion";
import React, { useEffect } from "react";

interface ScribbleCircleAroundProps {
  className?: string;
  duration?: number;
  delay?: number;
  loop?: boolean;
  instantFirstPlay?: boolean;
}

const ScribbleCircleAround = ({
  className,
  duration = 2,
  delay = 10,
  loop = true,
  instantFirstPlay = true,
}: ScribbleCircleAroundProps) => {
  const [animationState, setAnimationState] = React.useState<"off" | "on">(
    instantFirstPlay ? "on" : "off",
  );

  useEffect(() => {
    if (loop) {
      // When looping is enabled, the animation will repeat after the delay time.
      const interval = setInterval(
        () => {
          setAnimationState("on");
        },
        delay * 1000 + duration * 1000,
      );

      return () => {
        clearInterval(interval);
      };
    } else {
      // When looping is disabled, the animation will only play once after the delay time.
      const timeout = setTimeout(() => {
        setAnimationState("on");
      }, delay * 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [delay, loop]);

  function handleAnimationDefinition(definition: AnimationDefinition) {
    if (definition === "on") {
      setAnimationState("off");
    }
  }

  const variants: Variants = {
    off: {
      pathLength: 0,
      pathOffset: 0,
      transition: {
        duration: 0,
      },
    },
    on: {
      pathLength: [0, 0.2, 0],
      pathOffset: 0.99, // needed to conquer the flickering issue
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 289.43 153.97"
      preserveAspectRatio="none"
      className={clsx(className)}
    >
      <motion.path
        variants={variants}
        initial="off"
        animate={animationState}
        onAnimationComplete={handleAnimationDefinition}
        stroke={"#0047ab"}
        className={clsx(animationState === "on" ? "block" : "hidden")} // needed to conquer the flickering issue
        strokeWidth="3"
        strokeLinecap="round"
        d="M208.1,28.3C175.7,9.8,137,7.1,99.8,4.8C85.5,3.9,71.1,3,57,5.1s-28.2,7.3-38.6,17.1
                C-1.1,40.7-3.2,72.9,9.2,96.8c19.1,36.5,60.4,50,98.7,54.6c24.6,3,49.5,2.5,74.1-0.5c23.6-2.9,47.7-8.3,66.8-22.3
                c12.5-9.1,22.5-21.9,27.5-36.5s4.8-31.2-1.4-45.3c-7.9-18-25-30.9-43.5-37.7S193,1,173.3,1.1c-27.2,0-54.6,2.4-81.2,8.3
                c-17.5,3.9-35,9.5-49,20.7c-14,11.2-23.1,28-21.8,46.2c1.3,17.9,12.7,34.4,27.2,44.6c17.9,12.6,40.2,17.2,62.1,18.5
                c29.3,1.9,58.9-1.5,87.3-9.1c15.8-4.2,31.6-10,44.3-20.2c12.8-10.2,22.2-25.7,21.9-42c-0.3-15.7-9.6-30.4-22.3-39.7
                s-28.4-13.7-44.1-15.4s-31.4-0.8-47.2-0.4c-31.8,0.7-64.2-0.6-95,7.7c-12.2,3.3-24.1,8.2-34,16.1S4,55.2,2.1,67.6
                c-3.1,19.9,9,39.7,25.5,51.2s36.8,16,56.7,19.1c35.3,5.5,71.6,7.3,106.8,0.8c11.4-2.1,22.8-5.2,33.1-10.7
                c10.9-5.8,18.4-14.3,26-23.8"
      />
    </motion.svg>
  );
};

export default ScribbleCircleAround;
