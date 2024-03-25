import React from "react";
import InstagramLogo from '../../assets/icons/instagram_logo.png';

const Footer = () => {
    return (
        <div className="h-[500px] w-full p-20 flex flex-col justify-between text-white bg-primary">
            <div className="flex flex-col gap-10">
                <h1 className="font-bold">Contact</h1>
                <p className="px-10">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="w-full flex flex-row justify-end">
                <a href="https://www.instagram.com/einfacheinfach.studio/">
                    <div className="flex flex-row gap-4 items-center">
                        <img className="h-10" src={InstagramLogo} alt="instagram-logo" />
                        einfacheinfach.studio
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer;