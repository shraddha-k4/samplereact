import React from 'react'
import { Link } from 'react-router-dom'
import Makeup from './Makeup'
import Lipstick from './Lipstick'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className='bg-black p-5 text-white flex flex-col justify-center items-center '>
               <p className='text-3xl font-bold'>MAYBELLINE</p> 
                <p>NEW YORK</p>
      </div>
      <div className='flex flex-row bg-black text-white justify-center items-center space-x-4 p-2 font-semibold text-xl'>
        <Link to="/"><div className='inline-block border-b-3 border-transparent hover:border-blue-200 cursor-pointer'>Virtual Beauty Studio</div></Link>
      <Link to="/Lipstick2"><div className='inline-block border-b-3 border-transparent hover:border-blue-200 cursor-pointer'>Shop All</div></Link>
        <div className='inline-block border-b-3 border-transparent hover:border-blue-200 cursor-pointer'>Eyes</div>
        <div className='inline-block border-b-3 border-transparent hover:border-blue-200 cursor-pointer'>Face</div>
        <Link to="/Lipstick2"><div className='inline-block border-b-3 border-transparent hover:border-blue-200 cursor-pointer'>Lips</div></Link>
        <div className='inline-block border-b-3 border-transparent hover:border-blue-200 cursor-pointer'>Tips & Trends</div>
        <div className='inline-block border-b-3 border-transparent hover:border-blue-200 cursor-pointer'>About us</div>
        </div>
      </nav>
      {/* <Makeup/>
      <Lipstick/> */}
    </>
  )
}

export default Navbar
