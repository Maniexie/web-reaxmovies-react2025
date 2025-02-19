import React, { useState } from 'react'
import { useParams } from 'react-router'
import DetailLayouts from '../../Layouts/DetailLayouts'
import DetailMovieComponents from '../../components/DetailMovie/DetailMovie'

const DetailMovie = () => {
    const [id] = useState(useParams().id)
    return (
        <div>
            <DetailLayouts>
                <DetailMovieComponents></DetailMovieComponents>
            </DetailLayouts>
        </div>
    )
}

export default DetailMovie