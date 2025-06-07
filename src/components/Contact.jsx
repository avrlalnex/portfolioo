import React from "react";

function Contact() {
    return (
        <div className='flex items-center justify-center flex-col text-left pt-10 pb-10 mt-60'>
			<hr className="border-t border-gray-400 w-full mb-4" />
           <div className="mb-4 text-2xl font-bold">Contact</div>
                
            
            <p className='text-base md:text-lg mb-3'>
                <img
                    src='https://img.icons8.com/?size=100&id=108806&format=png&color=000000'
                    alt='Email'
                    className='w-8 h-8 inline-block mr-2'
                />
                <a
                    href='mailto:avrillalaine.dev@gmail.com'
                    className='text-blue-500 hover:underline'
                >
                    linazaavril@gmail.com
                </a>
            </p>
			<p className='text-base md:text-lg mb-3'>
                <img
                    src='https://img.icons8.com/?size=100&id=64154&format=png&color=000000'
                    alt='LinkedIn'
                    className='w-8 h-8 inline-block mr-2'
                />
                <a
                    href='https://www.linkedin.com/in/avril-lalaine-linaza-297b0b262/?trk=opento_sprofile_topcard'
                    className='text-blue-500 hover:underline'
                >
                    Avril Lalaine Linaza
                </a>
            </p>
			<hr className="border-t border-gray-400 w-full mb-4" />
        </div>
    );
}

export default Contact;
