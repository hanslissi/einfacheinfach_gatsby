import React, { useRef } from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import { useScroll, motion } from "framer-motion";
import EinfachEinfachTrailer from "../../../assets/videos/einfacheinfach_animation.mp4";
import DonutySvg from "../../../assets/shapes/Donuty.svg";
import useParallax from "../../../hooks/useParallax";
import ShortCurvyArrrowLineSvg from "../../animated-commons/short-curvy-arrow-line";
import DiagonalLinePattern from "../../../assets/patterns/diagonal_line_pattern.svg";

const Services = () => {
  const refHeadline = useRef(null);
  const { scrollYProgress: scrollYProgressSection } = useScroll();
  const yParallaxSm = useParallax(scrollYProgressSection, 200);
  const { scrollYProgress } = useScroll({
    target: refHeadline,
    offset: ["end end", "start start"],
  });

  return (
    <SectionWrapper id="services">
      <div className="relative bg-primary flex flex-col items-center gap-12 py-20 md:py-32 md:gap-32">
        <h1 ref={refHeadline} className="text-white">
          Wir erklären - <br />
          aber{" "}
          <span className="relative inline-block">
            einfach einfach!
            <div className="absolute -bottom-[100%] left-0">
              <motion.svg
                className="max-w-[100%]"
                width="545"
                height="57"
                viewBox="0 0 545 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2.29297 17.7656C159.122 14.2162 316.002 11.7953 472.764 5.86895C494.866 5.03339 561.004 0.500601 539.068 3.331C478.808 11.1065 417.121 12.4449 356.654 18.4C321.676 21.8448 273.32 27.0879 236.894 33.1519C229.845 34.3253 222.826 35.7835 215.956 37.7519C203.947 41.1932 211.627 42.3005 219.842 43.6209C279.678 53.2373 341.599 52.3041 402.019 54.883"
                  stroke="#61bbee"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength={scrollYProgress}
                />
              </motion.svg>
            </div>
          </span>
        </h1>
        <p className="text-white max-w-[800px] px-10">
          Ist Ihre Zielgruppe verwirrt? Hat sie Fragen über Ihre Services?
          Suchen sie nach klaren und schnellen Antworten? Unsere Videos machen
          komplexe Themen einfach! In kürzester Zeit und auf unterhaltsame Weise
          erklärt. Nach dem Anschauen unserer Videos verstehen deine Kunden
          alles – klar, einfach und ohne Missverständnisse!
        </p>
        <motion.img
          className="absolute h-[150px] -bottom-1/2 -right-20 md:h-[300px] md:-right-32"
          src={DonutySvg}
          style={{ y: yParallaxSm }}
        />
      </div>
      <div className="container mx-auto mt-10">
        <div className="relative px-6 md:px-20">
          <motion.div
            className="absolute hidden md:block left-0 w-[25%] h-20 -bottom-32 md:w-[15%] md:h-32"
            style={{
              y: yParallaxSm,
              backgroundImage: `url(${DiagonalLinePattern})`,
              backgroundRepeat: "repeat",
              backgroundSize: "40%",
            }}
          />
          <ShortCurvyArrrowLineSvg className="absolute hidden md:block -left-14 -top-1/2 w-[10%] z-10" />
          <video
            className="relative w-full rounded-xl border overflow-hidden"
            controls
          >
            <source src={EinfachEinfachTrailer} type="video/mp4" />
          </video>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
