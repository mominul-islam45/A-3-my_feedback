import React, { useEffect, useState } from "react";
import NavbarArea from "../components/NavbarArea";
import Footer from "../components/Footer";
import Container_2 from "../components/common/Container_2";
import Card_portrait from "../components/common/Card_portrait";
import Title from "../components/common/Title";
// import Button from "../components/common/Button";
import { useNavigate } from "react-router";

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


      <Footer />
    </>
  );
};

export default Restaurant;
