import React, { useEffect, useState } from "react";
import NavbarArea from "../components/NavbarArea";
import Footer from "../components/Footer";
import Container_1 from "../components/common/Container_1";
import TopRated_ResCarousal from "../components/TopRated_ResCarousal";
import Card_portrait from "../components/common/Card_portrait";
import Title from "../components/common/Title";

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
      
  return (
    <div>
      <NavbarArea />
      <Container_1>
        {/* Tab bar */}
        <div className="hidden md:block py-5">
          <img src="imgs/tab_bar.png" alt="Tab bar" />
        </div>
        <TopRated_ResCarousal/>

        <div className="pt-12">
          <Title>The latest trends</Title>
          {/* Cards Container */}
          <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 py-5'>
            {latest.map(({id, name, description, rating, total_ratings, img})=>(
              <Card_portrait id={id} img={img[0]} name={name} description={description} rating={rating} total_ratings={total_ratings}/>
            ))}
          </div>
        </div>
      </Container_1>
      <Footer />
    </div>
  );
};

export default Home;
