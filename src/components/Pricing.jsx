import React, { useState } from 'react'
import profile from '../assets/profile.svg'
import profilec from '../assets/profilec.svg'
import verification from '../assets/verification.png'
import cross from '../assets/cross.png'
import { IoMdCheckmark } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'

const Pricing = () => {
    const [click, setClick] = useState(1)

    const lists = [
        {
            id: 1,
            icon: <div className='h-5 w-5 bg-green-500 rounded-full relative flex justify-center items-center'>
                <IoMdCheckmark fill='white' />
            </div>,
            text: "Ultimate access to all course, exercises and assessments"
        },
        {
            id: 2,
            icon: <div className='h-5 w-5 bg-green-500 rounded-full relative flex justify-center items-center'>
                <IoMdCheckmark fill='white' />
            </div>,
            text: "Free acess for all kind of exercise corrections with downloads."
        },
        {
            id: 3,
            icon: <div className='h-5 w-5 bg-green-500 rounded-full relative flex justify-center items-center'>
                <IoMdCheckmark fill='white' />
            </div>,
            text: "Free acess for all kind of exercise corrections with downloads."
        },
        {
            id: 4,
            icon: <div className='h-5 w-5 bg-green-500 rounded-full relative flex justify-center items-center'>
                <IoMdCheckmark fill='white' />
            </div>,
            text: "Free acess for all kind of exercise corrections with downloads."
        }
    ]

    return (
        <div className='bg-[#020718] py-6 my-3'>
            <div className="container text-center">
                <div className="content text-center text-white">
                    <p>Pricing plan</p>
                    <h1 className='text-3xl'>What deal suit you perfect</h1>
                </div>
                <div className="buttons border border-gray-800 p-1 my-3 inline-block ml-auto space-x-1 rounded-sm">


                    <button onClick={() => setClick(1)} className={`${click === 1 ? 'bg-white text-black' : "bg-transparent text-white"} rounded text-sm px-4 py-2`}>Monthly plan</button>


                    <button onClick={() => setClick(2)} className={`${click === 2 ? 'bg-white text-black' : "bg-transparent text-white"} rounded text-sm px-4 py-2`}>Annual plan</button>


                </div>


                <div className="pricing-table w-full space-y-3 sm:space-y-0 sm:flex gap-3 my-6">
                    <div className='sm:basis-1/2 border px-6 py-6 bg-transparent text-left rounded shadow border-slate-600 space-y-10'>

                        <img src={profile} alt="" />
                        <h2 className='text-white text-3xl font-bold'>Starter Pack</h2>

                        <ul>
                            {
                                lists && lists.map((list, index) => {
                                    return <li key={index} className='flex gap-2 items-center my-4 text-white'>
                                        <div className='h-5 w-5 bg-green-500 rounded-full relative flex justify-center items-center'>
                                            <IoMdCheckmark fill='white' />
                                        </div>
                                        <p className='text-sm w-[80%]'>{list.text}</p>
                                    </li>
                                })
                            }
                        </ul>

                        <div className="amount w-full border-t text-white flex justify-between items-center py-3 border-primary">
                            <div>
                                <h1 className='text-slate-400'>Starting from</h1>
                                <h1 className='font-bold'>49.99/mo</h1>
                            </div>

                            <BsArrowRight className='cursor-pointer' />
                        </div>

                    </div>


                    <div className='w-full sm:basis-1/2 border px-6 py-6 bg-white text-left rounded shadow border-slate-600 space-y-10'>

                        <img src={profilec} alt="" />
                        <h2 className=' text-3xl text-primary font-bold'>Family Pack</h2>

                        <ul>
                            {
                                lists && lists.map((list, index) => {
                                    return <li key={index} className='flex gap-2 items-center my-4 text-white'>
                                        <div className='h-5 w-5 bg-green-500 rounded-full relative flex justify-center items-center'>
                                            <IoMdCheckmark fill='white' />
                                        </div>
                                        <p className='text-sm w-[80%] text-slate-500'>{list.text}</p>
                                    </li>
                                })
                            }
                        </ul>

                        <div className="amount w-full border-t text-white flex justify-between items-center py-3 border-[#ddd]">
                            <div>
                                <h1 className='text-primary'>Starting from</h1>
                                <h1 className='font-bold text-primary'>49.99/mo</h1>
                            </div>

                            <BsArrowRight className='cursor-pointer' fill='#111' />
                        </div>


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Pricing