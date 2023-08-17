import React from 'react'

import blog from '../assets/blog.png'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import {CgComment} from 'react-icons/cg'

const Blog = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="content space-y-4 my-4">
          <p className='text-secondary text-[18px] text-center'>Blog Post</p>
          <h1 className='w-full text-center mx-auto text-primary text-3xl font-normal'>Popular blog post we update everyday</h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4  items-center">
          <div className="blog-images space-y-3  items-center">
            <img src={blog} alt="" />
            <p className='text-slate-600 text-sm'>How to work with prototype design with adobe xd featuring tools</p>
            <div className="comments flex gap-2 text-slate-700 items-center text-sm">
              <CgComment />
              <span>22 Comments</span>
            </div>
          </div>
          <div className="blog-images space-y-3">
            <img src={blog1} alt="" />
            <p className='text-slate-600 text-sm'>How to work with prototype design with adobe xd featuring tools</p>
            <div className="comments flex gap-2 text-slate-700 items-center text-sm">
              <CgComment />
              <span>22 Comments</span>
            </div>
          </div>
          <div className="blog-images space-y-3">
            <img src={blog2} alt="" />
            <p className='text-slate-600 text-sm'>How to work with prototype design with adobe xd featuring tools</p>
            <div className="comments flex gap-2 text-slate-700 items-center text-sm">
              <CgComment />
              <span>22 Comments</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog