import React from "react";
import { Card, CardBody } from "@heroui/react";
import { useNavigate } from "react-router";

const Card_landscape = ({ id, img, name, description, rating, total_ratings,}) => {

  const navigate = useNavigate()
  const onHandleClick = ()=>{
    navigate('/restaurant')
  }
  
  return (
    <>
    <Card key={id} className="bg-white rounded-xl flex-row mb-0">
      <img
        src={img}
        alt="Image"
        className="rounded-xl object-cover h-[200px] w-fit aspect-square"
      />
      <CardBody>
        <div>
          <h4 onClick={onHandleClick} className="text-lg font-semibold mb-2 cursor-pointer hover:underline underline-offset-3 decoration-2">
            {name}
          </h4>
          <p className="text-sm text-gray mb-6 mr-8">{description}</p>

          <div className="text-sm flex space-x-1.5">
            <img src="icons/5_star.svg" alt="Icon" />
            <span className="font-semibold ml-1.5">{rating}</span>
            <span className="text-gray">({total_ratings})</span>
          </div>
        </div>
      </CardBody>
    </Card>
    <div className="w-full h-[2px] bg-black/15 my-8"></div>
    </>
  );
};

export default Card_landscape;
