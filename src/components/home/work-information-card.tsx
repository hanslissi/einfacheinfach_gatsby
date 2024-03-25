import React from "react";

interface IconInformationCardProps {
    title: string;
    description: string;
    thumbnail: any;
}

const IconInformationCard = ({ title, description, thumbnail }: IconInformationCardProps) => {
    return (
        <div className="relative aspect-[2] w-full border rounded-xl overflow-hidden">
            <img src={thumbnail} className="object-cover w-full h-full" />
        </div>
    )
}

export default IconInformationCard;