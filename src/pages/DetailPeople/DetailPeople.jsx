import React from 'react'
import DetailLayouts from '../../Layouts/DetailLayouts'
import DetailPeopleComponents from '../../components/DetailPeople/DetailPeople'

const DetailPeople = () => {
    return (
        <div>
            <DetailLayouts>
                <DetailPeopleComponents></DetailPeopleComponents>
            </DetailLayouts>
        </div>
    )
}

export default DetailPeople