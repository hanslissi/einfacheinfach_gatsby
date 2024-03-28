import React from 'react';
import CrossPattern from '../../assets/patterns/cross_pattern.png';
import DiagonalLinePattern from '../../assets/patterns/diagonal_line_pattern.png';
import GridPattern from '../../assets/patterns/grid_pattern.png';
import WavyPattern from '../../assets/patterns/wavy_pattern.png';
import { StaticImage } from 'gatsby-plugin-image';

interface CharacterCardProps {
    name: string;
}

const patterns = [CrossPattern, DiagonalLinePattern, GridPattern, WavyPattern];
const getRandomPattern = () => patterns[Math.floor(Math.random() * patterns.length)];

const CharacterCard = ({ name }: CharacterCardProps) => {
    return (
        <div className="relative w-full h-full bg-beige border">
            <div
                className="absolute left-0 top-0 w-full h-[30%] opacity-20"
                style={{ backgroundImage: `url(${getRandomPattern()})`, backgroundRepeat: 'repeat', backgroundSize: '40%' }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-beige"></div>
            </div>
            <div className="relative p-2 flex flex-row gap-2 items-center lg:gap-4 lg:p-4">
                <h2 className="font-bold">{name}</h2>
                <hr className="border w-full"></hr>
            </div>
            <div
                className="w-full transform scale-110 origin-bottom"
            >
                <StaticImage
                    src={"../../assets/pictures/characters/jonny.png"}
                    alt={name}
                />
            </div>
        </div>
    );
};

export default CharacterCard;