import React from "react";

const Nav = () => {
    return (
        <header className="sticky top-0 z-50 h-20">
            <nav className="h-full flex flex-row gap-8 justify-end items-center text-secondary px-16">
                <a href="#services"><span>services</span></a>
                <a href="#work"><span>work</span></a>
                <a href="#about"><span>about us</span></a>
                <a href="#contact"><span>contact</span></a>
            </nav>
        </header>
    )
}

export default Nav;