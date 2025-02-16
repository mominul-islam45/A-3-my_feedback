import React, { useEffect, useState } from "react";
import NavbarArea from "../components/NavbarArea";
import Footer from "../components/Footer";
import Container_1 from "../components/common/Container_1";
import Container_2 from "../components/common/Container_2";
import TopRated_ResCarousal from "../components/TopRated_ResCarousal";
import Card_portrait from "../components/common/Card_portrait";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import RecentActivity_Slider from "../components/common/RecentActivity_Slider";
import { useNavigate } from "react-router";

const Home = () => {
      // Fetching restaurant data from API
      const [data, setData] = useState([])
      useEffect(()=>{
          fetch('./db/restaurantsData.json')
              .then((response) => response.json())
              .then((jsonData) => {
                  setData(jsonData)
              })
      }, [])
  
      // Filtering data for latest restaurants
      const latest = data.filter(item => item.id <= 12)

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
      {isSearchFieldOpen && <div onClick={()=>(seIsSearchFieldOpen(false))} className='z-20 absolute top-0 left-0 w-full h-screen bg-gray opacity-15'></div>}

      <NavbarArea onClickField={onClickField} onClickSearch={onClickSearch}/>
      <Container_1>
        {/* Tab bar */}
        <div className="hidden md:block pt-5 pb-8">
          <img src="imgs/tab_bar.png" alt="Tab bar" />
        </div>
        {/* Carousal */}
        <TopRated_ResCarousal/>
        
        {/* Latest Trends */}
        <div className="pt-12">
          <Title>The latest trends</Title>
          {/* Cards Container */}
          <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 py-5'>
            {latest.map(({id, name, description, rating, total_ratings, img})=>(
              <Card_portrait id={id} img={img[0]} name={name} description={description} rating={rating} total_ratings={total_ratings}/>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4 py-12">
          <Title className='font-normal'>Discover more cool restaurants</Title>
          <Button>Show more</Button>
        </div>
      </Container_1>

      {/* Explore MyFeedback business */}
      <section className="bg-light py-4 ">
        <Container_2 className='sm:px-12 md:px-16 lg:px-20 xl:px-24 flex flex-col-reverse md:flex-row gap-5 items-center'>
          <div className=" basis-full">
            <Title className='text-[18px] md:text-[26px] leading-[24px] md:leading-[32.5px]'>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</Title>
            <p className="text-black/75 pt-5 pb-10">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
            <Button className='bg-black active:bg-black/85 text-[17px]'>MyFeedback for business</Button>
          </div>
          <div className=" basis-full">
            <img src="imgs/explore.jpg" alt="Image" className="rounded-2xl" />
          </div>
        </Container_2>
      </section>

      {/* Recent activities */}
      <Container_1 className='py-10'>
        <Title>Recent activities</Title>
        <RecentActivity_Slider/>
      </Container_1>
      <Footer />
    </>
  );
};

export default Home;
