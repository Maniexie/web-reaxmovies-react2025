import React from 'react'
import ShowMoreLayouts from '../../Layouts/ShowMoreLayouts'
import ShowMorePeopleComponents from '../../components/ShowMorePeople/ShowMorePeople'

const ShowMorePeople = () => {
    return (
        <div>
            <ShowMoreLayouts types='People'>
                <ShowMorePeopleComponents />
            </ShowMoreLayouts>
        </div>
    )
}

export default ShowMorePeople