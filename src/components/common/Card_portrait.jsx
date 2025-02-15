import React from "react";
import { Card, CardBody, CardFooter, } from '@heroui/react'

const Card_portrait = ({id, img, name, description, rating, total_ratings}) => {
  return (
    <Card key={id} className="bg-light rounded-xl">
      <img
        src={img}
        alt="Image"
        className="rounded-xl object-cover h-[200px] aspect-[1.2/1]"
      />
      <CardBody className="space-y-1">
        <h4 className="text-lg font-semibold cursor-pointer hover:underline underline-offset-3 decoration-2">
          {name}
        </h4>
        <p className="text-sm text-gray">{description}</p>
      </CardBody>
      <CardFooter className="text-sm space-x-1.5">
        <img src="icons/5_star.svg" alt="Icon" />
        <span className="font-semibold ml-1.5">{rating}</span>
        <span className="text-gray">({total_ratings})</span>
      </CardFooter>
    </Card>
  );
};

export default Card_portrait;
