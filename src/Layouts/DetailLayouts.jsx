import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const DetailLayouts = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <div className="bottom-0 w-full bg-amber-500">
                <Footer />
            </div>
        </div>
    )
}

export default DetailLayouts