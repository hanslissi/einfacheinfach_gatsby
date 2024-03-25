import React from "react";

interface IconInformationCardProps {
    title: string;
    description: string;
    icon: any;
}

const IconInformationCard = ({ title, description, icon }: IconInformationCardProps) => {
    return (
        <div className="w-full h-full p-4 border rounded-xl flex flex-col gap-6">
            <img src={icon} className="h-[40%]" />
            <h2 className="font-bold text-primary text-center">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default IconInformationCard;