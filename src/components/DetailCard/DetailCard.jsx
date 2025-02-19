import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const DetailCard = () => {
    const { id } = useParams()

    const [trending, setTrending] = useState([])
    const [movie, setMovie] = useState([])
    const [people, setPeople] = useState([])

    useEffect(() => {

    })
    return (
        <div>
            <div className="flex">
                <div className="flex">
                    <div className="flex">
                        <img src="" alt="" />
                    </div>
                    <div className="flex"></div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard