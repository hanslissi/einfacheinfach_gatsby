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
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

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
    }

    const calculateSpreadOutValues = (cssVariableMaxScreenX: string) => {
        // returns a function that calculates random css values for the spread out animation
        return () => {
            return {
                x: `calc(${Math.random()} * var(${cssVariableMaxScreenX}, -90vw))`,
                y: `calc(${Math.random()} * 100vh)`,
                rotate: (Math.random() * 360)
            }
        }
    }

    return (
        <header className={clsx(
            "h-20 top-0 bg-beige z-50",
            {
                "sticky": !spread
            }
        )}>
            <nav className="h-full flex text-primary flex-row justify-between items-center px-8 md:px-16 md:gap-8 md:justify-end">
                <a href="#services" className="max-md:[--max-screen-x-services:90vw]"> {/* This sets a css variable that can be used to make the spread out animation responsive */}
                    <span className={clsx({ "text-primary": activeSection === "services" })}>
                        <CharSpreaderSpan
                            text="services"
                            spread={spread}
                            calculateSpreadOutValues={calculateSpreadOutValues("--max-screen-x-services")}
                        />
                    </span>
                </a>
                <a href="#work" className="max-md:[--max-screen-x-work:-30vw]"> {/* This sets a css variable that can be used to make the spread out animation responsive */}
                    <span className={clsx({ "text-primary": activeSection === "work" })}>
                        <CharSpreaderSpan
                            text="work"
                            spread={spread}
                            calculateSpreadOutValues={calculateSpreadOutValues("--max-screen-x-work")}
                        />
                    </span>
                </a>
                <a href="#about" className="max-md:[--max-screen-x-about:30vw]"> {/* This sets a css variable that can be used to make the spread out animation responsive */}
                    <span className={clsx({ "text-primary": activeSection === "about" })}>
                        <CharSpreaderSpan
                            text="about"
                            spread={spread}
                            calculateSpreadOutValues={calculateSpreadOutValues("--max-screen-x-about")}
                        />
                    </span>
                </a>
                <a href="#contact" className="max-md:[--max-screen-x-contact:-90vw]"> {/* This sets a css variable that can be used to make the spread out animation responsive */}
                    <span className={clsx({ "text-primary": activeSection === "contact" })}>
                        <CharSpreaderSpan
                            text="contact"
                            spread={spread}
                            calculateSpreadOutValues={calculateSpreadOutValues("--max-screen-x-contact")}
                        />
                    </span>
                </a>
            </nav>
        </header>
    )
}

export default Nav;