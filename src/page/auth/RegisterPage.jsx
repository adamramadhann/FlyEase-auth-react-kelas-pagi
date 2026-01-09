import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
        RegisterPage
        <Link 
            className='text-blue-500 text-xl font-bold' 
            to={'/'}
        >
            back to intro page
        </Link>
    </div>
  )
}

export default RegisterPage