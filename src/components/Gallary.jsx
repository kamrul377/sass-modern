import React from 'react'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import { BiArrowBack } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'

const Gallary = () => {

    const images = [
        { id: 1, image: img1 },
        { id: 2, image: img2 },
        { id: 3, image: img3 },
        { id: 4, image: img4 },
        { id: 5, image: img5 },
        { id: 6, image: img6 },
    ]

    return (
        <div>
            <div className="container my-4">
                <div className="content space-y-4">
                    <p className='text-secondary text-[18px] text-center'>Working space</p>
                    <h1 className='w-full lg:w-[60%] mx-auto text-primary text-3xl font-normal'>Let’s meet our interior room decoration</h1>
                </div>
                <div className="images grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {
                        images.map((img, index) => (
                            <div key={index} className={`${index === 3 && "mt-[-99px]"} ${index === 5 && 'mt-[-60px]'}`}>
                                <img src={img.image} key={index} alt="" />
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className='bg-[#f7f7f7] py-2 w-full text-center text-slate-700 text-sm flex justify-center items-center gap-2'>
                <button>Explore more </button>
                <BsArrowRight />
            </div>
        </div>
    )
}

export default Gallary