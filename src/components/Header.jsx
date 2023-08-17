import React from 'react'
import '../styles/header.scss'
import Navbar from '../utils/Navbar'
import { BiLocationPlus } from 'react-icons/bi'


const Header = () => {
    return (
        <div className='header h-[900px]'>
            <Navbar />

            <div className="box bg-[#ffffffc4] w-[90%] md:w-[520px] mx-auto md:ml-32 mt-20 px-4 py-8 space-y-8 rounded shadow-lg">
                <h1 className='text-[48px] font-bold !text-primary '>Coworking space that
                    will feel like home.</h1>


                <p className='text-primary text-[13px]'>Whether you’re an established enterprise or a growing startup, discover spaces that inspire which will best your most impactful work.</p>

                <div className="location w-full border-2 border-[#8D448B] p-3 rounded flex items-center justify-between">
                    <div>
                        <p className='text-sm text-slate-600'>Find workspace</p>
                        <select className='bg-transparent text-sm text-primary font-[700]'>
                            <option value="">Chicago, New Yourk</option>
                        </select>
                    </div>
                    <div>
                        <BiLocationPlus size={30} color='#bbbbbb' />
                    </div>
                </div>

                <div className="button w-full p-3 my-3 bg-[#8D448B] rounded text-center text-white cursor-pointer">
                    <button> Subscribe </button>
                </div>

            </div>
        </div>
    )
}

export default Header