import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { axiosInstance } from '../../services/api/axiosInstance';
import { API_URL } from '../../services/api/apiURL';
import NullPNG from '../../assets/images/null.png'
import { FaArrowDown } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getTrendingPeople)
                setPeople(response.data.results.slice(0, 6))
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
                    <h1 className='text-2xl font-extrabold'>People</h1>
                    <Link to="/show-more-people" className='mt-2 text-md hover:underline underline-offset-4 flex items-center'>
                        <span className='text-lg'> {"Show More"}</span> <span className='mt-0.5 text-xl'><MdKeyboardDoubleArrowRight /></span>
                    </Link>
                </div>
                <div className="grid grid-cols-6 max-md:grid-cols-2 gap-2 mx-1 mb-2 overflow-x-auto">
                    {people.map((people) => (
                        <Link key={people.id} to={`/detail-people/${people.id}`} block={true} target='_blank'>
                            <div className="p-2 bg-gray-800 rounded-lg">
                                <img src={people.profile_path ? `https://image.tmdb.org/t/p/w500/${people.profile_path}` : NullPNG}
                                    alt={people.name} className=" rounded-tl-lg rounded-tr-lg " />
                                <h1 className="text-balance bg-amber-700 py-1 text-center text-lg font-semibold text-white hover:bg-amber-500 in-hover:active:bg-amber-300">{people.name}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default People
