import React from 'react'
import { Link } from 'react-router-dom'

const IntroPage = () => {
  return (
    <div className='w-screen h-screen relative bg-[#4788D7] flex items-center justify-center flex-col'>
        <img src="/public/image/peta.png" alt="peta" className='absolute top-0' />

        <div className='flex items-center gap-3 z-50'>
            <img src="/public/logo.svg" alt="logo FlyEase" height={37} width={37} />
            <h1 className='text-lg font-extrabold text-white' >FlyEase</h1>
        </div>

        {/* image pessawat */}
        <img src="/public/image/pesawat.png" alt="pesawat" width={428} height={338} />

        {/* kontent intro page */}
        <div className='w-[328px] h-auto py-10 flex flex-col'>
            <h1 className='text-3xl font-extrabold text-white text-center'>Find Your Flights Just One-Click Away</h1>
            <p className='text-white mt-[17px] text-center' >Book flights easily, anytime, anywhere, right from your smartphone!</p>

            <Link to={'/register'} className='w-full py-4 text-center rounded-full bg-white text-[#4788D7] font-extrabold text-xl mt-[27px]' >Get Started</Link>

            <p className='text-white text-center text-sm mt-5' >
                Already have an account? 
                <Link className='font-bold ml-1' to={'/login'} >
                    Login
                </Link>
            </p>
        </div>  

    </div>
  )
}

export default IntroPage