import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {

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
        <div className='w-full flex justify-between container h-20 items-center'>
            <div className="logo cursor-pointer">
                <img src={logo} alt="" />
            </div>
            <div className="nav">
                <ul className='flex gap-4'>
                    { 
                        navLinks && navLinks.map((l,index)=> { 
                            return <li className='text-slate-700 font-[500] cursor-pointer hover:text-black'> {l.name} </li>
                        })
                    }
                </ul>
            </div>
            <div className="button">
                <button className='bg-[#8D448B] text-white px-6 py-2 rounded text-sm cursor-pointer'>Join Us</button>
            </div>
        </div>
    )
}

export default Navbar