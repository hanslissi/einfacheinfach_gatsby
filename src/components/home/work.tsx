import React from "react";

const Work = () => {
    return (
        <div className="bg-beige flex flex-col gap-20 items-center">
            <h1>Work</h1>
            <div className="w-full flex flex-col justify-center gap-20 px-40">
                <div className="aspect-[2] w-full bg-beige border rounded-lg bg-secondary"></div>
                <div className="aspect-[2] w-full bg-beige border rounded-lg bg-secondary"></div>
                <div className="aspect-[2] w-full bg-beige border rounded-lg bg-secondary"></div>
            </div>
        </div>
    )
}

export default Work;