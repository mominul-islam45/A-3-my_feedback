import React from 'react'

const Footer = () => {
    const myFeedback = ['MyFeedback for business', 'Collections','Talk', 'Events', 'MyFeedback blog', 'Support','Developers']
  return (
    <div className='border-t border-t-gray/25 pt-5 pb-4 space-y-16'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-0 justify-center justify-items-center px-16'>
            <div className=' space-y-3'>
                <h4 className='text-[20px] font-lexend font-extrabold leading-[25px]'>About</h4>
                <p className='text-[14px] text-black/75'>About MyFeedback</p>
                <p className='text-[14px] text-black/75'>Investor Relations</p>
            </div>
            <div className=' space-y-3'>
                <h4 className='text-[20px] font-lexend font-extrabold leading-[25px]'>MyFeedback</h4>
                {myFeedback.map((item, i)=>(
                    <p key={i} className='text-[14px] text-black/75'>{item}</p>
                ))}
            </div>
            <div className=' space-y-5'>
                <div className='space-y-3'>
                    <h4 className='text-[20px] font-lexend font-extrabold leading-[25px]'>Languages</h4>
                    <select className='outline-none cursor-pointer text-black/75'>
                        <option >English</option>
                    </select>
                </div>
                <div className=' space-y-3'>
                    <h4 className='text-[20px] font-lexend font-extrabold leading-[25px]'>Countries</h4>
                    <select className='outline-none cursor-pointer text-black/75'>
                        <option v>Singapore</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <p className='text-sm font-semibold text-center px-3'>Copyright@Septembre 2023 myfeedback, designed by scott</p>
        </div>
    </div>
  )
}

export default Footer