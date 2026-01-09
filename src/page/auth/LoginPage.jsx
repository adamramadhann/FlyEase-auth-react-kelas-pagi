import React from 'react'
import { Link } from 'react-router-dom'
import InputProps from '../../components/InputProps'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col bg-[#4788D7]'>
        <h1 className='text-white text-2xl font-extrabold'>Sign In</h1>
        <form className='w-[318px] h-auto'>
          <InputProps 
            label={'Email'} 
            typeInput={'text'} 
            placeholderInput={'masukan email'}
            htmlFor={'email'}
          />

          {/* password */}
          


        </form>
        <Link 
            className='text-white text-xl font-bold' 
            to={'/'}
        >
            back to intro page
        </Link>
    </div>
  )
}

export default LoginPage