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
        <div className="mt-4 mx-4 flex flex-col items-center justify-center">
            {
                people && (
                    <div className="flex flex-col items-center">
                        <img
                            src={
                                people.profile_path
                                    ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                                    : 'https://via.placeholder.com/500x750?text=No+Image'
                            }
                            alt={people.name}
                            className="object-cover w-64 h-96 rounded-tl-lg rounded-tr-lg mb-4"
                        />
                        <div className="flex flex-col justify-center items-center mb-3">
                            <h1 className="text-3xl font-bold underline underline-offset-4">{people.name}</h1>
                            <p className="text-lg"><span className='font-bold'>Birthday: </span>{people.birthday}</p>
                            <p className="text-lg"><span className='font-bold'> Place of Birth:</span> {people.place_of_birth}</p>
                            <p className="text-lg"><span className='font-bold'> Known For: </span> {people.known_for_department}</p>
                            <p className="text-lg mt-4">Biography:</p>
                            <p className="text-lg mt-2 first:ml-4 whitespace-pre-line">{people.biography}</p>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default DetailPeople

