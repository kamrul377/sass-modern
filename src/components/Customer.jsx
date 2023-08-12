import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'

const Customer = () => {
    return (
        <div className=''>
            <div className="container py-6 text-center">
                <div className="content space-y-4">
                    <p className='text-secondary text-[18px]'>Meet our Clients</p>
                    <h1 className='w-full lg:w-[60%] mx-auto text-primary text-3xl font-normal'>This guys are using our service and they're more than happier ever</h1>
                </div>


                {/* logo */ }
                <div className="logos grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:gap-4 xl:justify-between gap-3 mt-20 mb-12 place-items-center ">
                    <img src={logo1} alt={logo1} />
                    <img src={logo2} alt={logo2} />
                    <img src={logo3} alt={logo1} />
                    <img src={logo4} alt={logo1} />
                    <img src={logo5} alt={logo1} />
                </div>
            </div>

        </div>
    )
}

export default Customer