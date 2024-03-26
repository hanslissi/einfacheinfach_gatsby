import clsx from "clsx";
import { useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Nav = () => {
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

        sections.current.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollY.get() >= sectionTop && scrollY.get() < sectionBottom) {
                setActiveSection(section.id);
            }
        });
    }
    
    return (
        <header className="sticky h-20 top-0 bg-beige z-50">
            <nav className="h-full flex text-secondary flex-row justify-between items-center px-8 md:px-16 md:gap-8 md:justify-end">
                <a href="#services"><span className={clsx({ "text-primary": activeSection === "services" })}>services</span></a>
                <a href="#work"><span className={clsx({ "text-primary": activeSection === "work" })}>work</span></a>
                <a href="#about"><span className={clsx({ "text-primary": activeSection === "about" })}>about us</span></a>
                <a href="#contact"><span className={clsx({ "text-primary": activeSection === "contact" })}>contact</span></a>
            </nav>
        </header>
    )
}

export default Nav;