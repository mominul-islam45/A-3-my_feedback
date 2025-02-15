import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { GoPerson } from "react-icons/go";

const RecentActivity_Slider = () => {
  const recentReviews = [
    {
      name: "Leslie Sakho",
      location: "Canada, Toronto",
      date: "09/11/2023",
      review:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: ["imgs/rreview1.jpg", "imgs/rreview2.jpg", "imgs/rreview3.jpg"],
    },
    {
      name: "Chris Macari",
      location: "Singapore",
      date: "14/09/2023",
      review:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: ["imgs/rreview4.jpg", "imgs/rreview5.jpg", "imgs/rreview6.jpg"],
    },
    {
      name: "Jojo Alba",
      location: "Kuala Lumpur",
      date: "28/09/2023",
      review:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: ["imgs/rreview7.jpg", "imgs/rreview8.jpg", "imgs/rreview9.jpg"],
    },
    {
      name: "Emma Carter",
      location: "United Kingdom, London",
      date: "05/10/2023",
      review:
        "Excellent service and great ambiance! Loved the food presentation and overall experience.",
      images: ["imgs/rreview1.jpg", "imgs/rreview3.jpg", "imgs/rreview5.jpg"],
    },
    {
      name: "Rajesh Patel",
      location: "India, Mumbai",
      date: "12/10/2023",
      review:
        "Good place with a cozy vibe. The food was delicious, but the service was a bit slow.",
      images: ["imgs/rreview7.jpg", "imgs/rreview9.jpg", "imgs/rreview4.jpg"],
    },
  ];

  return (
    <div className="w-full overflow-x-auto snap-x py-3">
      <div className="inline-flex space-x-4">
        {recentReviews.map(({ name, location, date, review, images }, i) => (
          <Card key={i} className="bg-light rounded-xl w-[300px] sm:w-[450px] snap-center">
            <CardHeader className="gap-4">
              <div className="size-14 bg-white rounded-full flex justify-center items-center text-2xl">
                <GoPerson />
              </div>
              <div>
                <h4 className="text-lg font-semibold cursor-pointer hover:underline underline-offset-3 decoration-2">
                  {name}
                </h4>
                <p className="text-sm text-gray">{location}</p>
              </div>
            </CardHeader>
            <CardBody className="space-y-3">
              <div className="flex gap-4">
                <img src="icons/5_star.svg" alt="Icon" />
                <p className="text-sm text-black/85">{date}</p>
              </div>
              <p className="text-sm text-black/85">{review}</p>
            </CardBody>
            <CardFooter className="flex-col items-start space-y-3">
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <div key={i}>
                    <img src={img} alt="Image" />
                  </div>
                ))}
              </div>
              <p className="font-lexend text-[17px] font-medium underline">
                Discover
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity_Slider;
