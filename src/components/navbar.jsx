import React from 'react'

const Navbar = () => {
  return (
    <div className='h-25 w-screen flex'>
        <img
        className='w-12 h-12 rounded-full mt-5 ml-5'
        src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
        alt=""
        />
        <div className='flex mt-10 ml-125 gap-10'>
            <h4>home</h4>
            <h4>search</h4>
            <h4>messages</h4>
        </div>
        <div className='mt-8 ml-100 gap-10'>
            <button className='border-1 border-white p-2 rounded-md text-xs'>login</button>
            <button className='ml-7 border-1 border-white p-2 rounded-md text-xs'>signup</button>
        </div>
</div>
  )
}

export default Navbar
