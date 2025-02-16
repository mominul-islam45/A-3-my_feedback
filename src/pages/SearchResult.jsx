import React, { useEffect, useState } from 'react'
import NavbarArea from '../components/NavbarArea'
import Card_landscape from '../components/common/card_landscape'
// import Button from '../components/common/Button'
import Title from '../components/common/Title'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react"

const SearchResult = () => {
  // Fetching restaurant data from API
  const [data, setData] = useState([])
  useEffect(()=>{
      fetch('./db/restaurantsData.json')
          .then((response) => response.json())
          .then((jsonData) => {
              setData(jsonData)
          })
  }, [])

  const sortItems = [
    { key: 'new', label: 'All feedbacks' },
    { key: 'copy', label: 'Highest rated' },
    { key: 'edit', label: 'Oldest rated' }
  ];

  return (
    <>
      <NavbarArea/>
      <div className='grid grid-cols-1 lg:grid-cols-5 py-5'>
        <div className='px-4 lg:px-0 lg:pl-20 pb-10 col-span-3'>
          <div className='pb-5'>
            <p className='font-medium'>Home/ All restaurants</p>
            <div className='flex justify-between items-center'>
              <Title>best restaurants in singapore</Title>
              <Dropdown className='bg-white border border-gray/25 rounded-2xl shadow-xl text-black/75'>
                <DropdownTrigger className='mr-12'>
                  <Button className=' border border-black rounded-full cursor-pointer text-black'>Sort</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                {sortItems.map(item => (
                  <DropdownItem key={item.key} className='hover:bg-blue/10 hover:text-blue hover:rounded-lg'>{item.label}</DropdownItem>
                ))}
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>

          {data.map(({id, name, description, rating, total_ratings, img})=>(
            <Card_landscape id={id} img={img[0]} name={name} description={description} rating={rating} total_ratings={total_ratings}/>
          ))}
          <Button className='px-12'>Show more</Button>
        </div>

        <div className='col-span-2'>
          <img src="imgs/map.jpg" alt="Map" />
        </div>
      </div>
    </>
  )
}

export default SearchResult