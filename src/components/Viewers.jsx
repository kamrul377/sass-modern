import React from 'react'
import map from '../assets/map.png'
import { Link } from 'react-router-dom'
import { BiArrowToRight } from 'react-icons/bi'

const Viewers = () => {
  return (
    <div>
      <div className="container sm:flex justify-between items-center py-5">
        <div className="images sm:basis-1/2">
          <img src={map} alt="" />
        </div>
        <div className="content sm:basis-1/2 text-center w-full  space-y-4 py-5 sm:py-0">
          <h1 className="text-3xl text-primary sm:w-[70%]">
            We have more than thousand of worldwide happy customer.
          </h1>
          <p className='text-[14px] text-primary'>Coworking offers beautifully crafted workspaces where people can create, connect, and grow their businesses at prime locations in multiple cities.</p>
          <div className='flex gap-2 justify-center items-center'>
            <a href="" className='text-sm text-secondary'> Learn more</a>
            <BiArrowToRight color='gray' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewers