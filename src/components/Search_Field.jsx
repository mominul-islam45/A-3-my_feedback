import React from 'react'

const Search_Field = () => {
    
  return (
    <>
        <div className='w-fit p-1.5 md:p-3 border border-gray rounded-full hover:border-blue transition-all flex shadow-lg'>
            <input type="text" placeholder='restaurant, hotel, service....' className='outline-none text-black md:ml-2 md:pr-4 w-[70px] md:w-[100px] xl:w-fit'/>
            <div className='border-l border-l-gray mx-1 md:mx-4 relative'>
                <input type="text" value='Singapore' className='outline-none text-black ml-1 md:ml-4 w-[80px] md:w-full'/>
                {/* Search Action */}
                <button className='bg-blue size-8 md:size-10 rounded-full absolute -top-1 md:-top-2 -right-2 md:-right-5 flex justify-center items-center cursor-pointer'>
                    <img src="./icons/search.svg" alt="Icon" />
                </button>
            </div>
        </div>
    </>
  )
}

export default Search_Field