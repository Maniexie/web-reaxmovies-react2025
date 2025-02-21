import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../services/api/axiosInstance';
import { API_URL } from '../../services/api/apiURL';
import { Link } from 'react-router';

const ShowMore = () => {
    const [film, setFilm] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getTrendingAll);
                setFilm(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <ul className='grid grid-cols-5 gap-4 p-0.5'>
                {film.map((film) => (
                    <li key={film.id} className='bg-gray-800 p-4 rounded'>
                        <Link to={`/detail-movie/${film.id}`} target='_blank'>
                            <img src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`} alt={film.title || film.name} className='w-full h-auto' />
                            <h1 className='text-center mt-2 text-lg text-indigo-50 font-semibold'>{film.title || film.name}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowMore