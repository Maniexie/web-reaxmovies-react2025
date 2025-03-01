import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { axiosInstance } from '../../services/api/axiosInstance'
import { API_URL } from '../../services/api/apiURL'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'



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
                    <Link to="/show-more-trending" className='mt-2 text-md hover:underline underline-offset-4 flex items-center'>
                        <span className='text-lg'> {"Show More"}</span> <span className='mt-0.5 text-xl'><MdKeyboardDoubleArrowRight /></span>
                    </Link>
                </div>
                <div className="grid grid-cols-5 max-md:grid-cols-1 gap-2 overflow-x-auto mx-1">
                    {trending.map((tren) => (
                        <Link key={tren.id} to={`/detail-movie/${tren.id}`} target='_blank'>
                            <div className="p-2 bg-gray-800 rounded-lg">
                                {/* Gambar: Menyesuaikan ukuran responsif */}
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${tren.backdrop_path}`}
                                    alt={tren.title}
                                    className="w-full h-48 object-cover rounded-tl-lg rounded-tr-lg"
                                />
                                {/* Judul dengan style hover */}
                                <h1 className="text-center text-lg font-semibold bg-amber-700 py-1 text-white hover:bg-amber-500 transition-all">{tren.title || tren.name}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trending

