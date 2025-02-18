import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const ShowMoreLayouts = ({ children, types = "kosong harus di isi types movie / tv / trending" }) => {
    return (
        <div>
            <Navbar />
            <marquee behavior="scroll" direction="">Pilihan {types} trending today</marquee>
            {children}
            <Footer />
        </div>
    )
}

export default ShowMoreLayouts