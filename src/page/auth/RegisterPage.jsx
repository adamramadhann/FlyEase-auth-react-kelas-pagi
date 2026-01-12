import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputProps from '../../components/InputProps'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email !== '' && password !== '' && password === repassword) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        setEmail('');
        setPassword('');

        navigate('/login');
    } else {
      console.log({
        email : email,
        password : password,
        repassword : repassword
      })
      alert('input email dan password tidak boleh kosong')
    }
  } 

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-10 bg-[#4788D7]'>
    <h1 className='text-white text-2xl font-extrabold mb-14'>Sign Up</h1>
    <form 
      className='w-[318px] h-auto'
      onSubmit={handleSubmit}
    >
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

      <InputProps 
        label={'Repassword'} 
        typeInput={'password'} 
        placeholderInput={'masukan Repassword'}
        htmlFor={'Repassword'}
      />
      <button type='submit' className='text-[#4788D7] w-full py-4 bg-white rounded-md text-xl font-bold mt-5' >
        Register
      </button>
    </form>

    <p className='text-sm mt-10 text-white' >
      Have an account? <Link className='font-bold' to={'/login'} >Sign in</Link>
    </p>
</div>  )
}

export default RegisterPage