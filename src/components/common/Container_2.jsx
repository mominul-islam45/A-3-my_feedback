import React from 'react'
import { cn } from '../../lib/utilities/cn'

const Container_2 = ({children, className}) => {
  return (
    <div className={cn(' max-w-[1200px] mx-auto px-3 sm:px-6 md:px-12 lg:px-16 xl:px-0 2xl:max-w-[1440px]', className)}>
        {children}
    </div>
  )
}

export default Container_2