import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/api/axiosInstance'
import { API_URL } from '../../services/api/apiURL'
import { Link } from 'react-router';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getTrendingMovies);
                setMovies(response.data.results.slice(0, 5));
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <div div className="flex flex-col items-stretch" >
                <div className="flex justify-between mx-4">
                    <h1 className='text-2xl font-extrabold'>Movies</h1>
                    <Link to="/show-more-movie" className='mt-2 text-md hover:underline flex items-center'>
                        <span className='text-lg'> {"Show More"}</span> <span className='mt-0.5 text-xl'><MdKeyboardDoubleArrowRight /></span>
                    </Link>
                </div>
                <div className='flex overflow-x-auto'>
                    {movies.map(movie => (
                        <Link key={movie.id} to={`/detail-movie/${movie.id}`}>
                            <div className="m-1 mx-2 border-2 rounded-tl-lg rounded-tr-lg border-gray-400">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} className="rounded-tl-lg rounded-tr-lg" />
                                <h1 className=" bg-amber-700 py-1 text-center text-lg font-semibold">{movie.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Movies