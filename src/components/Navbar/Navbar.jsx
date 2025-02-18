import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            <nav className='bg-gray-800 px-2 py-5'>
                <div className="flex justify-around  items-center text-xl font-bold">
                    <div className="mx-2 text-white">
                        <Link to={"/"}>
                            ReaxMovies
                        </Link>
                    </div>
                    <div className="">
                        <ul className='flex'>
                            <li className='mx-2 text-white'>
                                <Link to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className='mx-2 text-white'>About</li>
                            <li className='mx-2 text-white'>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar