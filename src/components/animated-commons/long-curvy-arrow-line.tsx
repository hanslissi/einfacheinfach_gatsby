import clsx from "clsx";
import { MotionValue, motion } from "framer-motion";
import React from "react";

interface LongCurvyArrrowLineSvgProps {
  className?: string;
  pathLength?: MotionValue<number> | undefined;
}

const LongCurvyArrrowLineSvg = ({
  className,
  pathLength,
}: LongCurvyArrrowLineSvgProps) => {
  return (
    <motion.svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 549.6 795.66"
      preserveAspectRatio="none"
      className={clsx(className)}
    >
      <path
        stroke="#0047ab"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4, 8"
        d="M142.52,.04c.5,20.25,16.93,37.32,35.71,44.9,18.78,7.58,39.63,7.62,59.88,7.55,66.92-.24,133.84-.48,200.76-.73,19.4-.07,39.09-.1,57.78,5.1s36.58,16.41,45.43,33.68c14.38,28.06,1.01,62.95-19.36,87.02-67.9,80.24-184.27,80.23-280.38,80.08-40.34-.06-80.91,.16-120.9,6.12-34.93,5.21-80.65,13.8-106.66,39.99-10.16,10.23-16.32,25.76-11.51,39.35,2.74,7.73,8.73,14.03,15.73,18.3,28.56,17.41,69.39,14.19,101.42,18.67,32.84,4.59,65.86,8.08,98.83,11.61,65.94,7.06,131.99,13.14,197.9,20.54,15.77,1.77,31.83,3.62,46.32,10.09,14.49,6.47,27.42,18.44,30.96,33.91,3.78,16.51-3.89,34.05-15.9,46-12.01,11.95-27.8,19.25-43.55,25.5-124.85,49.6-269.25,49.4-382.35,121.89-21.14,13.55-41.99,31.25-48.04,55.62-7.38,29.71-2.44,68.01,24.87,81.84,27.31,13.82,62.12,7.37,78.59-18.44"
      />
      <motion.path
        pathLength={pathLength}
        stroke="#61bbee"
        strokeWidth="3"
        strokeLinecap="round"
        d="M108.04,768.62c-16.46,25.81-51.27,32.26-78.59,18.44-27.31-13.82-32.25-52.13-24.87-81.84,6.06-24.37,26.9-42.07,48.04-55.62,113.11-72.49,257.5-72.29,382.35-121.89,15.75-6.25,31.54-13.55,43.55-25.5,12.01-11.95,19.68-29.48,15.9-46-3.54-15.47-16.47-27.43-30.96-33.91-14.49-6.47-30.55-8.32-46.32-10.09-65.91-7.4-131.95-13.48-197.9-20.54-32.97-3.53-65.99-7.02-98.83-11.61-32.03-4.48-72.86-1.26-101.42-18.67-7-4.27-12.99-10.57-15.73-18.3-4.81-13.59,1.35-29.12,11.51-39.35,26-26.19,71.73-34.78,106.66-39.99,39.99-5.96,80.56-6.19,120.9-6.12,96.11,.15,212.48,.16,280.38-80.08,20.37-24.07,33.74-58.96,19.36-87.02-8.85-17.26-26.74-28.47-45.43-33.68s-38.38-5.17-57.78-5.1c-66.92,.24-133.84,.48-200.76,.73-20.25,.07-41.1,.04-59.88-7.55C159.45,37.36,143.02,20.28,142.52,.04"
      />
    </motion.svg>
  );
};

export default LongCurvyArrrowLineSvg;
