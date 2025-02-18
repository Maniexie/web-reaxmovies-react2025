import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { axiosInstance } from '../../services/api/axiosInstance'
import { API_URL } from '../../services/api/apiURL'



const Trending = () => {
    const [trending, setTrending] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getTrendingAll);
                setTrending(response.data.results.slice(0, 5))
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])



    return (
        <div>
            <div className="flex flex-col items-stretch">
                <div className="flex justify-between mx-4">
                    <h1 className='text-2xl font-extrabold'>Trending</h1>
                    <Link to="/show-more-trending" className='mt-2 text-md hover:underline'>{"Show More >>"} </Link>
                </div>
                <div className='flex overflow-x-auto'>
                    {trending.map((tren) => (
                        <Link key={tren.id} to={`/detail-movie/${tren.id}`}>
                            <div className="p-2">
                                <img src={`https://image.tmdb.org/t/p/w500/${tren.backdrop_path}`} alt={tren.title} className="object-contain rounded-lg" />
                                <h1 className="text-center mt-2 text-lg font-semibold">{tren.title || tren.name}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trending

