import React from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import CharacterCard from "../character-card";

const Team = () => {
    return (
        <SectionWrapper id="about">
            <div className="flex flex-col gap-10 mt-20 items-center">
                <h1>Unser Team</h1>
                <div className="w-full grid grid-cols-3 gap-4 md:grid-cols-6 lg:px-20">
                    <CharacterCard
                        name="Jonny"
                    />
                    <CharacterCard
                        name="Betti"
                    />
                    <CharacterCard
                        name="Rafa"
                    />
                    <CharacterCard
                        name="Hannah"
                    />
                    <CharacterCard
                        name="Nici"
                    />
                    <CharacterCard
                        name="Beyza"
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Team;