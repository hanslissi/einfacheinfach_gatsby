import React from "react";

const Nav = () => {
    return (
        <header className="sticky top-0 z-50 h-20">
            <nav className="h-full flex flex-row gap-4 justify-end items-center text-secondary">
                <span>services</span>
                <span>work</span>
                <span>about us</span>
                <span>contact</span>
            </nav>
        </header>
    )
}

export default Nav;