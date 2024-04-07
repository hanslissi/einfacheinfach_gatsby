import clsx from "clsx";
import { MotionValue, motion } from "framer-motion";
import React from "react";

interface ShortCurvyArrrowLineSvgProps {
  className?: string;
  pathLength?: MotionValue<number> | undefined;
}

const ShortCurvyArrrowLineSvg = ({
  className,
  pathLength,
}: ShortCurvyArrrowLineSvgProps) => {
  return (
    <motion.svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 118.9 451.81"
      preserveAspectRatio="none"
      className={clsx(className)}
    >
      <path
        stroke="#61bbee"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="4, 8"
        d="M54.48,1.5C38.65,18.88,16.93,35.68,13.48,60.5c-7.76,55.85,67.72,53.95,92.72,87.37,16.97,22.68,13.22,56.04-1.68,78.72-16.61,25.29-43.28,41.09-65.38,60.95-18.81,16.91-35.54,38.61-37.45,63.83-3.64,47.83,46.43,78.78,87.22,88.36"
      />
      <path
        stroke="#61bbee"
        strokeWidth="3"
        strokeLinecap="round"
        d="M87.33,429.16c3.13,4.04,6.26,8.08,9.4,12.12,.11,.15,.23,.31,.23,.49,0,.29-.28,.48-.53,.62-4.67,2.64-9.35,5.28-14.02,7.92"
      />
    </motion.svg>
  );
};

export default ShortCurvyArrrowLineSvg;
