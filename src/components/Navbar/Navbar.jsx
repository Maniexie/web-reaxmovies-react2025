import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='bg-gray-800 px-2 py-5'>
                <div className="flex justify-around  items-center text-xl font-bold">
                    <div className="mx-2 text-white">ReaxMovies</div>
                    <div className="">
                        <ul className='flex'>
                            <li className='mx-2 text-white'>Home</li>
                            <li className='mx-2 text-white'>About</li>
                            <li className='mx-2 text-white'>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar