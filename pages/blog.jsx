import Image from 'next/image'
import React from 'react'
import { blogs } from './api/data'


const Blog = () => {
  return (
    <div className='blog'>
      <div className="pageBanner">
        <h1>#readMore</h1>
        <p>Read all case studies about our products!</p>
      </div>
      <div className="wrapper exp">
        {blogs.map(blog=>(
          <div className="pageCard">
            <div className="image">
              <Image src={blog.img} className="img" alt=""/>
            </div>
            <div className="info">
              <h1>{blog.title}</h1>
              <div>
                <span>{blog.author}</span>
                <span>20-Sep, 2022</span>
              </div>
              <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat blanditiis nesciunt labore quasi rem, vitae laborum officiis quia natus, odio explicabo animi ducimus dolorem facilis ea quisquam laboriosam earum omnis similique. Molestias odio magni voluptate velit veniam omnis eaque aliquam...</p>
              <p className='link'>Continue Reading ...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog