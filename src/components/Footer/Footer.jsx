import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <footer className='flex flex-col text-white bg-gray-800 pb-2 pt-5'>
                <div className="flex justify-center items-center gap-2">
                    <a
                        href="https://github.com/Maniexie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <FaGithub />
                    </a>
                </div>
                <div className='mt-1'>
                    <p className='text-center text-lg'>
                        Copyright &copy; 2025 ReaxMovies
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer