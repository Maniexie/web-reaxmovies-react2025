import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { API_URL } from '../../services/api/apiURL'
import { axiosInstance } from '../../services/api/axiosInstance'
import NullPNG from '../../assets/images/null.png'
import { SlEmotsmile } from "react-icons/sl";
import Hamburger from 'hamburger-react'

const Navbar = ({ onSearch }) => {

    const [isOpen, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false)

    const handleInputChange = async (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery)

        if (searchQuery) {
            setLoading(true)
            try {
                const response = await axiosInstance.get(API_URL.searchMovie(searchQuery));
                setSuggestions(response.data.results.slice(0, 7))
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        } else {
            setSuggestions([])
        }

    }

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(query)
    }

    return (
        <>
            {/* LARGE / DESKTOP VERSION */}
            <nav className='bg-gray-800 px-2 py-5 sticky top-0 left-0 max-md:hidden'>
                <div className="flex justify-around  items-center text-xl font-bold">
                    <div className="mx-2 text-white hover:animate-pulse">
                        <Link to={"/"}>
                            ReaxMovies
                        </Link>
                    </div>

                    <div className="search relative border-4 border-amber-200 rounded-2xl">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                value={query}
                                onChange={handleInputChange}
                                className="px-4 py-2 rounded-lg text-white w-80"
                                placeholder="Search movies..."
                            />
                        </form>

                        {/* Dropdown suggestions */}
                        {query && (
                            <div className="absolute left-0 mt-2 w-full bg-white text-black rounded-lg shadow-lg z-10">
                                {loading ? (
                                    <div className="p-4 animate-spin"><SlEmotsmile /></div>
                                ) : suggestions.length > 0 ? (
                                    <ul className="p-0 m-0 z-50">
                                        {suggestions.map((movie) => (
                                            <li
                                                key={movie.id}
                                                className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                            >
                                                {/* Teks di sebelah kiri */}
                                                <Link
                                                    to={`/detail-movie/${movie.id}`}
                                                    className="block flex-1 px-4 text-left"
                                                    target='_blank'
                                                >
                                                    <span className="font-semibold">{movie.title}</span>
                                                </Link>

                                                {/* Gambar di sebelah kanan */}
                                                {movie.backdrop_path && (
                                                    <img
                                                        src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` || NullPNG : NullPNG}
                                                        alt={movie.title}
                                                        className="w-12 h-12 object-cover ml-2 rounded-md"
                                                    />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-4">No suggestions found</div>
                                )}
                            </div>
                        )}
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

            {/* MOBILE VERSION */}
            <nav className='bg-gray-800 px-2 py-5 sticky top-0 left-0 md:hidden'>
                <div className="flex justify-around  items-center text-xl font-bold">
                    <div className="mx-2 text-white hover:animate-pulse">
                        <Link to={"/"}>
                            ReaxMovies
                        </Link>
                    </div>

                    <div className="search relative border-4 border-amber-200 rounded-2xl">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                value={query}
                                onChange={handleInputChange}
                                className="px-2 py-2 rounded-lg text-white w-52"
                                placeholder="Search movies..."
                            />
                        </form>

                        {/* Dropdown suggestions */}
                        {query && (
                            <div className="absolute left-0 mt-2 w-full bg-white text-black rounded-lg shadow-lg z-10">
                                {loading ? (
                                    <div className="p-4 animate-spin"><SlEmotsmile /></div>
                                ) : suggestions.length > 0 ? (
                                    <ul className="p-0 m-0 z-50">
                                        {suggestions.map((movie) => (
                                            <li
                                                key={movie.id}
                                                className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                                            >
                                                {/* Teks di sebelah kiri */}
                                                <Link
                                                    to={`/detail-movie/${movie.id}`}
                                                    className="block flex-1 px-4 text-left"
                                                    target='_blank'
                                                >
                                                    <span className="font-semibold">{movie.title}</span>
                                                </Link>

                                                {/* Gambar di sebelah kanan */}
                                                {movie.backdrop_path && (
                                                    <img
                                                        src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` || NullPNG : NullPNG}
                                                        alt={movie.title}
                                                        className="w-12 h-12 object-cover ml-2 rounded-md"
                                                    />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-4">No suggestions found</div>
                                )}
                            </div>
                        )}
                    </div>

                    <Hamburger toggled={isOpen} toggle={setOpen} color='white' animateOnMount={true} />

                    {/* Toggle Menu */}
                    {isOpen && (
                        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col p-4">
                            <ul>
                                <li className="px-4 py-2 hover:bg-blue-300 text-amber-50 hover:rounded-lg transition-colors duration-1 ease-in-out">
                                    <NavLink to={"/"} className={({ isActive }) =>
                                        isActive ? "animate-bounce underline underline-offset-4" : "text-white "
                                    }>Home</NavLink>
                                </li>
                                <li className="px-4 py-2 hover:bg-blue-300 text-amber-50 hover:rounded-lg transition-colors duration-1 ease-in-out">
                                    <NavLink to={"/show-more-movie"} className={({ isActive }) =>
                                        isActive ? "animate-bounce underline underline-offset-4" : "text-white "
                                    }>Movies</NavLink>
                                </li>
                                <li className="px-4 py-2 hover:bg-blue-300 text-amber-50 hover:rounded-lg transition-colors duration-1 ease-in-out">
                                    <NavLink to={"/show-more-people"} className={({ isActive }) =>
                                        isActive ? "animate-bounce underline underline-offset-4" : "text-white "
                                    }>People</NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar