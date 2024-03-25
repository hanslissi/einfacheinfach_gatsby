import React from "react";
import SectionWrapper from "../../wrappers/section-wrapper";
import JonnyCharacterImg from "../../../assets/pictures/characters/jonny.png";
import CharacterCard from "../character-card";

const Team = () => {
    return (
        <SectionWrapper>
            <div className="flex flex-col gap-10 mt-20 items-center">
                <h1>Unser Team</h1>
                <div className="w-full h-[550px] flex flex-row justify-center gap-4">
                    <CharacterCard
                        name="Jonny"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Betti"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Rafa"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Hannah"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Nici"
                        characterImg={JonnyCharacterImg}
                    />
                    <CharacterCard
                        name="Beyza"
                        characterImg={JonnyCharacterImg}
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Team;