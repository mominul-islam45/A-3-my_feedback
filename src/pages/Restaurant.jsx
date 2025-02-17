import React, { useEffect, useState } from "react";
import NavbarArea from "../components/NavbarArea";
import Footer from "../components/Footer";
import Container_2 from "../components/common/Container_2";
import Card_portrait from "../components/common/Card_portrait";
import Title from "../components/common/Title";
// import Button from "../components/common/Button";
import { useNavigate } from "react-router";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const Restaurant  = () => {
      // For the overlay
      const [isSearchFieldOpen, seIsSearchFieldOpen] = useState(false)
      const onClickField = () =>{seIsSearchFieldOpen(true)}

      const navigate = useNavigate()
      
      const onClickSearch = ()=>{
        seIsSearchFieldOpen(false)
        navigate('/search')
      }
      
  return (
    <>
      {isSearchFieldOpen && <div onClick={()=>(seIsSearchFieldOpen(false))} className='z-20 absolute top-0 left-0 w-full h-screen bg-gray opacity-25'></div>}

      <NavbarArea onClickField={onClickField} onClickSearch={onClickSearch}/>
      <Container_2>
        <h4 className="font-semibold py-4">Home/BellaItalia</h4>
      </Container_2>
      <section className="bg-[url(imgs/bg.jpg)] bg-cover relative">
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <Container_2 className='text-white pt-6 pb-10 md:pt-18 md:pb-32 '>
            <Title className=' text-white font-semibold text-[38px] mb-2'>Bella italia</Title>
            <div className="flex gap-x-2">
              <img src="icons/5_star.svg" alt="Icon" />
              <p className="">5.0 (834 reviews)</p>
            </div>
            <p className="mb-12 pt-6">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
            <div className="flex gap-x-1 juce items-center mb-8"><FaLocationDot className="text-lg"/><p>Singapour, Bishan-Ang Mo Kio Park</p></div>
            <div className="flex gap-x-2 items-center"><FaClock/><p>7j/7, 08:00 - 22:00</p></div>
          </Container_2>
        </div>
        <div className=" absolute -bottom-[65px] left-1/2 -translate-x-1/2"><img src="imgs/bella.png" alt="logo" /></div>
      </section>

      <Container_2>
        <Title className='font-semibold'>Discover our magnificent place in photos</Title>
        <p>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
      </Container_2>
      <Footer />
    </>
  );
};

export default Restaurant;
