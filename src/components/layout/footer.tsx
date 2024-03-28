import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
    return (
        <div className="h-[300px] w-full px-4 py-10 flex flex-col justify-between text-white bg-primary md:p-20 md:h-[500px]">
            <div className="flex flex-col gap-4 md:gap-10">
                <h1 className="font-bold" id="contact">Contact</h1>
                <p className="md:px-10">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="w-full flex flex-row justify-end">
                <a href="https://www.instagram.com/einfacheinfach.studio/">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="h-10">
                            <StaticImage
                                src={"../../assets/icons/instagram_logo.png"} 
                                alt="instagram-logo"
                            />
                        </div>
                        einfacheinfach.studio
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer;