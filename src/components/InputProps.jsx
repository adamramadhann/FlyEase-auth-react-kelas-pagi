import React from 'react'

const InputProps = ({ htmlFor, typeInput, label, placeholderInput }) => {
  return (
    <label 
        htmlFor={htmlFor} 
        className='text-lg text-white font-semibold'
    >
        {label}
        <input 
            type={typeInput}
            placeholder={placeholderInput} 
            className='w-full rounded-sm text-white bg-[#89CCFA] py-3 text-base px-2 placeholder:text-white' 
        />
    </label>
  )
}

export default InputProps