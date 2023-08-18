import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaTimes, FaBars } from 'react-icons/fa'


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navLinks = [
        {
            id: 1,
            name: "Home",
            link: '/'
        },
        {
            id: 2,
            name: "Adversite",
            link: '/adbersite'
        },
        {
            id: 3,
            name: "Supports",
            link: '/supports'
        },
        {
            id: 4,
            name: "Contacts",
            link: '/contacts'
        },
        {
            id: 5,
            name: "About us",
            link: '/aboutus'
        },
    ]

    return (
        <>
            <div className='w-full flex  justify-between container h-20 items-center relative'>


                <div className="full-nav hidden sm:flex">
                    <div className="logo cursor-pointer ">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav">
                        <ul className='hidden md:flex gap-4'>
                            {
                                navLinks && navLinks.map((l, index) => {
                                    return <li key={index} className='text-slate-700 font-[500] cursor-pointer hover:text-black'> {l.name} </li>
                                })
                            }
                        </ul>

                    </div>
                    <div className="button">
                        <button className='bg-[#8D448B] text-white px-6 py-2 rounded text-sm cursor-pointer'>Join Us</button>
                    </div>
                </div>
                <div className="phone sm:hidden cursor-pointer z-50 ml-auto" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>

            </div>

            {open && <div className="full-screen h-screen w-screen bg-[#050505c4] absolute top-0 left-0 sm:hidden">
                <div className="sidebars bg-[#ffffffea] absolute top-0 right-0 w-[70%] min-h-screen px-4 py-7">
                    <div className="logo cursor-pointer">
                        <img src={logo} alt="" />
                    </div>
                    <div className="links my-5">
                        <ul className=''>
                            {
                                navLinks && navLinks.map((link, i) => (
                                    <li key={i} className='my-5 text-lg text-center font-bold cursor-pointer text-slate-700 hover:scale-105 duration-200'> {link.name}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="button flex justify-center">
                        <button className='bg-[#8D448B] text-white w-full py-2 rounded text-sm cursor-pointer'>Join Us</button>
                    </div>

                </div>
            </div>}


        </>
    )
}

export default Navbar