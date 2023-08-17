import React from 'react'
import {BsPlayCircle} from 'react-icons/bs'
import featureimg from '../assets/featureimg.png'
import wifi from '../assets/wifi.png'
import group2 from '../assets/group2.png'
import man from '../assets/groupman.png'

const Feature = () => {

    const featureItems = [
        {
            id: 1,
            logo: group2,
            title: "1000 ft2",
            text: "you will get 1000ft square space facility here"
        },
        {
            id: 2,
            logo: man,
            title: "80 Members",
            text: "you will get 1000ft square space facility here"
        },
        {
            id: 3,
            logo: wifi,
            title: "100 mbps",
            text: "Internet speed is much better thjan others."
        }
    ]

    return (
        <div>
            <div className="container sm:flex justify-between relative my-5" >
                <div className="content basis-[55%] w-full py-6 space-y-3 md:space-y-7">
                    <h1 className='text-primary text-[25px] md:text-[40px]'>Some good place to where <br /> can build your startup business</h1>
                    <h5 className='text-primary text-[14px]'>Coworking offers beautifully crafted workspaces <br /> where people can create

                        connect,  and grow their businesses at prime brlocations in multiple cities.</h5>


                    <div className=' flex my-4 gap-4  md:bg-inherit'>

                        {
                            featureItems?.map((i, index) => {
                                return <div className='basis-1/3 space-y-3' key={index}>
                                    <img src={i.logo} alt="" />
                                    <div className="text space-y-3">
                                        <h1 className='text-[20px] font-bold text-primary'>{i.title}</h1>
                                        <p className='text-[15px] text-[#343D48] '>{i.text}</p>
                                    </div>
                                </div>
                            })
                        }

                    </div>

                </div>
                <div className="image basis-[45%] ">
                    <img src={featureimg} alt="" />
                </div>
                {/* absolute king section */}
                <div className='bg-[#8D448B] px-4 py-3 absolute top-5 left-[50%] rounded shadow text-white flex justify-center items-center gap-3'>
                    <BsPlayCircle size={35} />
                    <div className='space-y-1'>
                        <h2 >Kin Coworking Space </h2>
                        <h2 className='text-gray-300 text-sm'>442 Broadway, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature