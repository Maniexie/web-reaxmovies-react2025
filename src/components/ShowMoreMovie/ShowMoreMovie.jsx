import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/api/axiosInstance'
import { API_URL } from '../../services/api/apiURL'
import { Link } from 'react-router'


const ShowMoreMovie = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getTrendingMovies)
                setMovies(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <ul className='grid grid-cols-5 gap-4 p-0.5'>
                {movies.map((movie) => (
                    <li key={movie.id} className='bg-gray-800 p-4 rounded'>
                        <Link to={`/detail-movie/${movie.id}`} target='_blank'>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title || movie.name} className='w-full h-auto' />
                            <h1 className='text-center mt-2 text-lg text-indigo-50 font-semibold'>{movie.title || movie.name}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowMoreMovie
