import React from 'react'
import { cn } from '../../lib/utilities/cn'

const Title = ({children, className}) => {
  return (
    <h2 className={cn(' font-lexend font-extrabold text-black text-[24px] md:text-[32px] leading-[32px] md:leading-[40px]', className)}>
        {children}
    </h2>
  )
}

export default Title