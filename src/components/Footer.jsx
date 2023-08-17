import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#020718] py-5'>
      <div className="container">


        <div className="content space-y-4 my-4">
          <p className='text-white text-3xl text-center'>Subscribe to get best offers</p>
          <h1 className='w-full  text-center text-slate-400 text-[13px] font-normal'>By subscribing with your mail, you will agree with terms</h1>
        </div>


        <div className="news flex w-full justify-center items-center gap-3 my-6">
          <input className='bg-[#191d2ce7] py-2 text-sm rounded w-[200px] md:w-[350px] focus:outline-none text-slate-400 px-4' type="text" name="news" id="" placeholder='Enter your email: ' />
          <button className='bg-white text-sm py-2 rounded px-8 text-primary'>Subscribe</button>  
        </div>


        <div className='h-[1px] bg-[#222]'></div>

      </div>
    </div>
  )
}

export default Footer