import React from "react";
import clsx from "clsx";

interface IconInformationCardProps {
    title: string;
    description: string;
    icon: any;
    className?: string;
}

const IconInformationCard = ({ title, description, icon, className }: IconInformationCardProps) => {
    return (
        <div className={clsx("w-full h-full mx-auto max-w-[275px] p-2 border rounded-xl flex flex-col gap-6 md:p-4", className)}>
            <img src={icon} className="h-[40%]" />
            <h2 className="font-bold text-primary text-center">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default IconInformationCard;