import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-5 bg-[#4788D7] text-white' >
        <h1 className='text-3xl font-bold' >Home Page</h1>
        <button 
            className='p-2 text-red-500 bg-white rounded-md text-xl font-semibold' 
        >
            LogOut
        </button>
    </div>
  )
}

export default Home