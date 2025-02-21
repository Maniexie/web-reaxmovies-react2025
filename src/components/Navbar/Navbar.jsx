import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            <nav className='bg-gray-800 px-2 py-5'>
                <div className="flex justify-around  items-center text-xl font-bold">
                    <div className="mx-2 text-white hover:animate-pulse">
                        <Link to={"/"}>
                            ReaxMovies
                        </Link>
                    </div>
                    <div className="">
                        <ul className='flex '>
                            <li className='px-4 py-2 hover:bg-blue-300 text-amber-50 hover:rounded-lg transition-colors duration-1 ease-in-out'>
                                <NavLink to={"/"} className={({ isActive }) =>
                                    isActive ? "animate-bounce underline underline-offset-4" : "text-white "
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li className='px-4 py-2 hover:bg-blue-300 text-amber-50 hover:rounded-lg transition-colors duration-1 ease-in-out'>
                                <NavLink to={"/show-more-movie"} className={({ isActive }) =>
                                    isActive ? "animate-bounce underline underline-offset-4" : "text-white "
                                }>
                                    Movies
                                </NavLink>
                            </li>
                            <li className='px-4 py-2 hover:bg-blue-300 text-amber-50 hover:rounded-lg transition-colors duration-1 ease-in-out'>
                                <NavLink to={"/show-more-people"} className={({ isActive }) =>
                                    isActive ? "animate-bounce underline underline-offset-4" : "text-white "
                                }>
                                    People
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar