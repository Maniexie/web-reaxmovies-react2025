import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { API_URL } from '../../services/api/apiURL'
import { axiosInstance } from '../../services/api/axiosInstance'

const DetailPeople = () => {
    const { id } = useParams()
    const [people, setPeople] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(API_URL.getPeopleId(id), {
                    params: {
                        api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
                    },
                })
                setPeople(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    return (
        <div>
            {people && (
                <div className="flex">
                    <img
                        src={
                            people.profile_path
                                ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                                : 'https://via.placeholder.com/500x750?text=No+Image'
                        }
                        alt={people.name}
                        className="object-cover w-64 h-96 rounded-tl-lg rounded-tr-lg"
                    />
                    <div className="flex flex-col pl-4">
                        <h1 className="text-3xl font-bold">{people.name}</h1>
                        <p className="text-lg">{people.biography}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetailPeople

