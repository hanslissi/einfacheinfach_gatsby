import clsx from "clsx";
import { useScroll } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import CharSpreaderSpan from "../animated-commons/char-spreader-span";
import { NavContext } from "../../context/NavContext";

const Nav = () => {
  const { spread } = useContext(NavContext);
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState<string>("");
  const sections = useRef<HTMLElement[]>();

  useEffect(() => {
    // Get all sections on the page and add a scroll listener
    const sectionElements = document.querySelectorAll("section");
    sections.current = Array.from(sectionElements);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (!sections.current) return;

    // Check which section is currently in view
    sections.current.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollY.get() >= sectionTop && scrollY.get() < sectionBottom) {
        setActiveSection(section.id);
      }
    });
  };

  const handleClickLink = (e: React.MouseEvent) => {
    // Disabling the link behavior when the characters are spread around
    if (spread) {
      e.preventDefault();
    }
  };

  const calculateSpreadOutValues = (cssVariableMaxScreenX: string) => {
    // returns a function that calculates random css values for the spread out animation
    return () => {
      return {
        x: `calc(${Math.random()} * var(${cssVariableMaxScreenX}, -80vw))`,
        y: `calc(${Math.random() - 0.05} * 100vh)`,
        rotate: Math.random() * 360,
      };
    };
  };

  return (
    <header
      className={clsx("h-20 top-0 bg-beige z-50", {
        sticky: !spread,
      })}
    >
      <nav className="h-full flex text-primary flex-row justify-between items-center px-8 md:px-16 md:gap-8 md:justify-end">
        <a
          href="#services"
          className={clsx(
            "max-md:[--max-screen-x-services:80vw]" /* This sets a css variable that can be used to make the spread out animation responsive */,
            {
              "cursor-default": spread,
            },
          )}
          onClick={handleClickLink}
        >
          <span className={clsx({ "font-bold": activeSection === "services" })}>
            <CharSpreaderSpan
              text="services"
              spread={spread}
              calculateSpreadOutValues={calculateSpreadOutValues(
                "--max-screen-x-services",
              )}
            />
          </span>
        </a>
        <a
          href="#work"
          className={clsx(
            "max-md:[--max-screen-x-work:-30vw]" /* This sets a css variable that can be used to make the spread out animation responsive */,
            {
              "cursor-default": spread,
            },
          )}
          onClick={handleClickLink}
        >
          <span className={clsx({ "font-bold": activeSection === "work" })}>
            <CharSpreaderSpan
              text="projekte"
              spread={spread}
              calculateSpreadOutValues={calculateSpreadOutValues(
                "--max-screen-x-work",
              )}
            />
          </span>
        </a>
        <a
          href="#about"
          className={clsx(
            "max-md:[--max-screen-x-about:30vw]" /* This sets a css variable that can be used to make the spread out animation responsive */,
            {
              "cursor-default": spread,
            },
          )}
          onClick={handleClickLink}
        >
          <span className={clsx({ "font-bold": activeSection === "about" })}>
            <CharSpreaderSpan
              text="team"
              spread={spread}
              calculateSpreadOutValues={calculateSpreadOutValues(
                "--max-screen-x-about",
              )}
            />
          </span>
        </a>
        <a
          href="#contact"
          className={clsx(
            "max-md:[--max-screen-x-contact:-80vw]" /* This sets a css variable that can be used to make the spread out animation responsive */,
            {
              "cursor-default": spread,
            },
          )}
          onClick={handleClickLink}
        >
          <span className={clsx({ "font-bold": activeSection === "contact" })}>
            <CharSpreaderSpan
              text="kontakt"
              spread={spread}
              calculateSpreadOutValues={calculateSpreadOutValues(
                "--max-screen-x-contact",
              )}
            />
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
