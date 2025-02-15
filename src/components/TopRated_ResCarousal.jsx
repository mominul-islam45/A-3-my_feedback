import React, { useEffect, useState } from 'react'
import Title from './common/Title'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Card_portrait from './common/Card_portrait';

const TopRated_ResCarousal = () => {
    // Fetching restaurant data from API
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('./db/restaurantsData.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData)
            })
    }, [])

    // Filtering data for top rated(5 star) restaurants
    const topRated = data.filter(item => item.rating === 5)

    // on every click there will be new slide of 4 items
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(4);
    const slides = [];
  
    // For responsiveness
    useEffect(() => {
      const updateItemsPerSlide = () => {
        if (window.innerWidth < 640) {
          setItemsPerSlide(1);
        } else if (window.innerWidth < 1024) {
          setItemsPerSlide(2);
        } else {
          setItemsPerSlide(4);
        }
      };
      
      updateItemsPerSlide();
      window.addEventListener("resize", updateItemsPerSlide);
      return () => window.removeEventListener("resize", updateItemsPerSlide);
    }, []);

    // on every click there will be new slide of 4 items
    for (let i = 0; i < topRated.length; i += itemsPerSlide){
        slides.push(topRated.slice(i, i + itemsPerSlide))
    }

    const prevBtn = ()=>{
        setCurrentIndex(currentIndex === 0? 0 : currentIndex - 1)
    }
    const nextBtn = ()=>{
        setCurrentIndex(currentIndex === slides.length -1 ? slides.length-1 : currentIndex + 1)
    }
    // Indicator
    const goToSlide = (i)=>{
        setCurrentIndex(i)
    }

  return (
    <div className='bg-blue py-4 px-10 rounded-xl w-full relative'>
        <Title className='text-white font-normal'>Find the best restaurant ratings below</Title>
        {/* Slide Container */}
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 py-8'>
            {slides.length > 0 && slides[currentIndex].map(({id, name, description, rating, total_ratings, img})=>(
                <Card_portrait id={id} img={img[0]} name={name} description={description} rating={rating} total_ratings={total_ratings}/>
            ))}
        </div>

        {/* Slide Controllers */}
        <button onClick={prevBtn} className={`bg-white rounded-full size-12 flex justify-center items-center absolute bottom-1/2 left-[16px] cursor-pointer hover:opacity-75 ${currentIndex === 0 && 'opacity-75'}`}><GoArrowLeft className='text-2xl stroke-1'/> </button>
        <button onClick={nextBtn} className={`bg-white rounded-full size-12 flex justify-center items-center absolute bottom-1/2 right-[16px] cursor-pointer hover:opacity-75 ${currentIndex === slides.length -1 && 'opacity-75'}`}><GoArrowRight className='text-2xl stroke-1'/> </button>
        
        {/* Slider Indicator */}
        <div className='flex justify-center gap-x-3 '>
        {slides.map((slide,i)=>(
          <div key={i}>
            <div onClick={()=> goToSlide(i)} className={`size-[10px] rounded-full ${i === currentIndex ? 'bg-white': 'bg-gray_v2'} cursor-pointer`}></div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default TopRated_ResCarousal