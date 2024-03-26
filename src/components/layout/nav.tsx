import React from "react";

const Nav = () => {
    return (
        <header className="sticky h-20 top-0 bg-beige z-50">
            <nav className="h-full flex text-secondary flex-row justify-between items-center px-8 md:px-16 md:gap-8 md:justify-end">
                <a href="#services"><span>services</span></a>
                <a href="#work"><span>work</span></a>
                <a href="#about"><span>about us</span></a>
                <a href="#contact"><span>contact</span></a>
            </nav>
        </header>
    )
}

export default Nav;