import React from "react";
import InstagramLogo from "../../assets/icons/instagram_logo.png";

const Footer = () => {
  return (
    <div className="h-[300px] w-full px-4 py-10 flex flex-col justify-between text-white bg-primary md:p-20 md:h-[500px]">
      <div className="flex flex-col gap-4 md:gap-10">
        <h1 className="font-bold" id="contact">
          Kontakt
        </h1>
        <a
          className="text-sm md:text-lg lg:text-xl md:px-10"
          href="mailto:office@einfacheinfach.top"
        >
          office@einfacheinfach.top
        </a>
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
  );
};

export default Footer;
