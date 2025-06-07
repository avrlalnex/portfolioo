import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
    return (
        <div className='flex flex-col md:flex-row items-center justify-center mt-60'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="mb-4 text-2xl font-bold" data-aos="fade-up">Projects</div>
                <hr className="border-t border-gray-400 w-full mb-4" />
                <br/>
                {portfolio.map((project, index) => (
                    <PortfolioItem
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

export default Portfolio;
