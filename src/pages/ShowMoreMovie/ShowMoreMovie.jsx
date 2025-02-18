import React from 'react'
import ShowMoreLayouts from '../../Layouts/ShowMoreLayouts'
import ShowMoreMovieComponents from '../../components/ShowMoreMovie/ShowMoreMovie'

const ShowMoreMovie = () => {
    return (
        <div>
            <ShowMoreLayouts types='movies'>
                <ShowMoreMovieComponents />
            </ShowMoreLayouts>
        </div>
    )
}

export default ShowMoreMovie