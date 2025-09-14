import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6 mt-20 mb-20'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
                Avril Lalaine
            </h1>
            <p className='text-base md:text-cl mb-3 font-medium'>
                <Typewriter
                    words={['Passionate about Web Development', 'Enthusiastic about UI/UX Design', 'Lifelong Learner']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </p>

            <div className="flex items-center space-x-4 mb-6">
                <a
                    href='https://github.com/avrlalnex'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <img
                        src='https://img.icons8.com/?size=100&id=118557&format=png&color=000000'
                        alt='GitHub'
                        className='w-10 h-10'
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/avril-lalaine-linaza-297b0b262/?trk=opento_sprofile_topcard'
                    target='_blank'
                    rel='noreferrer noopener'
                >
                    <img
                        src='https://img.icons8.com/?size=100&id=64154&format=png&color=000000'
                        alt='LinkedIn'
                        className='w-10 h-10'
                    />
                </a>
                <a href="/resume.pdf" download="Avril-Lalaine-Resume.pdf">
                    <img src="https://img.icons8.com/clouds/100/download.png" alt="Download Resume" className="w-10 h-10"/>
                </a>

            </div>

           {/* Scroll Down Notifier */}
<div className="mt-40 animate-bounce text-gray-600 dark:text-gray-300 text-sm md:text-base">
    ↓ Scroll down to see my projects ↓
</div>

        </div>
    );
}

export default Intro;
