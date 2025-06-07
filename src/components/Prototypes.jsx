import React from "react";
import PrototypesItem from "./PrototypesItem";
import prototype from "../data/prototype";

function Prototypes() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center mt-60'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="mb-4 text-2xl font-bold">Prototypes: UI/UX</div>
                <hr className="border-t border-gray-400 w-full mb-4" />
                <br/>
                {prototype.map((project, index) => (
                    <PrototypesItem
                        key={index}
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Prototypes;
