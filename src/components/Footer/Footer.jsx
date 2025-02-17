import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer className='text-white bg-gray-800 p-5'>
                <div className="flex justify-center items-center flex-col gap-6">
                    <Link
                        href="https://github.com/Maniexie"
                        target="_blank"
                        className="hover:text-gray-300"
                    >
                        <FaGithub />
                    </Link>
                    <p className='text-center mt-3 text-lg'>
                        Copyright &copy; 2025 ReaxMovies
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer