import React, { useState } from 'react'
import { useParams } from 'react-router'

const DetailMovie = () => {
    const [id] = useState(useParams().id)
    return (
        <div>DetailMovie {id}</div>
    )
}

export default DetailMovie