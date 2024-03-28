import clsx from "clsx";
import { useScroll } from "framer-motion";
import React, { useContext, useEffect, useRef, useState } from "react";
import CharSpreaderSpan from "../char-spreader-span";
import { NavContext } from "../../context/NavContext";

const Nav = () => {
    const { spread } = useContext(NavContext);
    const { scrollY } = useScroll();
    const [activeSection, setActiveSection] = useState<string>("");
    const sections = useRef<HTMLElement[]>();

    useEffect(() => {
        const sectionElements = document.querySelectorAll("section");
        sections.current = Array.from(sectionElements);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const handleScroll = () => {
        if (!sections.current) return;

        sections.current.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY.get() >= sectionTop && scrollY.get() < sectionBottom) {
                setActiveSection(section.id);
            }
        });
    }

    const calculateSpreadOutValues = () => {
        return {
            x: (Math.random() * -((window.innerWidth / 8) * 7)),
            y: (Math.random() * ((window.innerHeight / 8) * 7)),
            rotate: (Math.random() * 360)
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
                <a href="#services">
                    <span className={clsx({ "text-primary": activeSection === "services" })}>
                        <CharSpreaderSpan
                            text="services"
                            spread={spread}
                            calculateSpreadOutValues={calculateSpreadOutValues}
                        />
                    </span>
                </a>
                <a href="#work">
                    <span className={clsx({ "text-primary": activeSection === "work" })}>
                        <CharSpreaderSpan
                            text="work"
                            spread={spread}
                            calculateSpreadOutValues={calculateSpreadOutValues}
                        />
                    </span>
                </a>
                <a href="#about">
                    <span className={clsx({ "text-primary": activeSection === "about" })}>
                        <CharSpreaderSpan
                            text="about"
                            spread={spread}
                            calculateSpreadOutValues={calculateSpreadOutValues}
                        />
                    </span>
                </a>
                <a href="#contact">
                    <span className={clsx({ "text-primary": activeSection === "contact" })}>
                        <CharSpreaderSpan
                            text="contact"
                            spread={spread}
                            calculateSpreadOutValues={calculateSpreadOutValues}
                        />
                    </span>
                </a>
            </nav>
        </header>
    )
}

export default Nav;