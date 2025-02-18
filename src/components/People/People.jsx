import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { axiosInstance } from '../../services/api/axiosInstance';
import { API_URL } from '../../services/api/apiURL';

const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getTrendingPeople)
                setPeople(response.data.results.slice(0, 5))
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
                    <Link to="/show-more-people" className='mt-2 text-md hover:underline'>{"Show More >>"} </Link>
                </div>
                <div className="flex overflow-x-auto">
                    {people.map((people) => (
                        <Link key={people.id} to={`/detail-people/${people.id}`} block={true}>
                            <div className="m-1">
                                <img src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`} alt={people.name} className="rounded-tl-lg rounded-tr-lg" />
                                <h1 className=" bg-amber-700 py-1 text-center text-lg font-semibold">{people.name}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default People
