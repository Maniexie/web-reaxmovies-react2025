import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { emojiCursor, rainbowCursor } from "cursor-effects";

const MainLayouts = ({ children }) => {
    new rainbowCursor({
        length: 10,
        colors: ["red", "white"],
        size: 10,
    });
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayouts