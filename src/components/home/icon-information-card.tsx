import React from "react";
import clsx from "clsx";

interface IconInformationCardProps {
    title: string;
    description: string;
    icon: any;
    children?: React.ReactNode;
    className?: string;
}

const IconInformationCard = ({ title, description, icon, children, className }: IconInformationCardProps) => {
    return (
        <div className="relative w-full mx-auto max-w-[275px] max-h-fit">
            {children}
            <div className={clsx("relative w-full h-full bg-beige p-2 border rounded-xl flex flex-col gap-6 md:p-4", className)}>
                <img src={icon} className="h-[40%]" />
                <h2 className="font-bold text-primary text-center">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default IconInformationCard;