import React, { useEffect, useState } from 'react'
import { API_URL } from '../../services/api/apiURL'
import { axiosInstance } from '../../services/api/axiosInstance'
import NullPNG from "../../assets/images/null.png"
import { Link } from 'react-router'

const ShowMorePeople = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getTrendingPeople)
                setPeople(response.data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <ul className='grid grid-cols-4 gap-2'>
                {people.map((people) => (
                    <li key={people.id} className='bg-gray-800 p-4 rounded'>
                        <Link to={`/detail-people/${people.id}`} target='_blank'>
                            <img src={people.profile_path ? `https://image.tmdb.org/t/p/w500/${people.profile_path}` : NullPNG} alt={people.name} className="object-cover w-full h-64 rounded-t-lg" />
                            <h1 className="text-center mt-2 text-lg text-indigo-50 font-semibold">{people.name}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShowMorePeople