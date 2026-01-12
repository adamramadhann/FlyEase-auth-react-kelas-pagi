import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputProps from '../../components/InputProps'

const LoginPage = () => {

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-10 bg-[#4788D7]'>
        <h1 className='text-white text-2xl font-extrabold mb-14'>Sign In</h1>
        <form className='w-[318px] h-auto'>
          <InputProps 
            label={'Email'} 
            typeInput={'text'} 
            placeholderInput={'masukan email'}
            htmlFor={'email'}
          />

          {/* password */}
          <InputProps 
            label={'Password'} 
            typeInput={'password'} 
            placeholderInput={'masukan password'}
            htmlFor={'password'}
          />

          <p className='mt-2 text-end text-white text-sm mb-5' >
            Forgot password?
          </p>
          <button className='text-[#4788D7] w-full py-4 bg-white rounded-md text-xl font-bold mt-5' >
            Login
          </button>
        </form>

        <p className='text-center text-base text-white font-semibold' >OR <br /> brsign in with</p>

        <div className='flex items-center gap-3' >
          <span className='w-[37px] h-[37px] bg-white rounded-full block p-1' >
            <img 
              src="/public/image/facebook.png" 
              alt="facebook" 
              className='w-full'
            />
          </span>

          <span className='w-[37px] h-[37px] bg-white rounded-full block p-1' >
            <img 
              src="/public/image/google.png" 
              alt="google" 
              className='w-full'
            />
          </span>
        </div>

        <p className='text-sm text-white' >
          Don’t have an account? <Link className='font-bold' to={'/register'} >Sign up</Link>
        </p>
    </div>
  )
}

export default LoginPage