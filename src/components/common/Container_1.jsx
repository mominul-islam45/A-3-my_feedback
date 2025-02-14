import React from 'react'
import { cn } from '../../lib/utilities/cn'

const Container_1 = ({children, className}) => {
  return (
    <div className={cn(' max-w-[1300px] mx-auto px-3 sm:px-3 md:px-6 lg:px-10 xl:px-0 2xl:max-w-[1440px]', className)}>
        {children}
    </div>
  )
}

export default Container_1