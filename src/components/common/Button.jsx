import React from 'react'
import { cn } from '../../lib/utilities/cn'

const Button = ({children, onClick, className}) => {
  return (
    <>
        <button onClick={onClick} className={cn('bg-blue rounded-full text-white text-[18px] px-8 py-4 cursor-pointer hover:scale-105 transition-all active:bg-[#166cbd]', className)}>
            {children}
        </button>
    </>
  )
}

export default Button