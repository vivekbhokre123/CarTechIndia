import React from "react";
import CarSummary from "./CarSummary";
import Accordions from "./Accordions";
import img1 from "../../../public/CarsImages/1.jpeg";
import img2 from "../../../public/CarsImages/2.jpeg";
import img3 from "../../../public/CarsImages/3.jpeg";
import img4 from "../../../public/CarsImages/4.jpeg";
import img5 from "../../../public/CarsImages/5.jpeg";
import img6 from "../../../public/CarsImages/6.jpeg";
import img7 from "../../../public/CarsImages/7.jpeg";
import img8 from "../../../public/CarsImages/8.jpeg";
import img9 from "../../../public/CarsImages/9.jpeg";


export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        img6,
    },
    {
      imgelink:
      img2 , 

    },
    {
      imgelink:
      img3,
    },
    {
      imgelink:
      img4,
    },
    {
      imgelink:
      img5,
    },
    {
      imgelink:
      img6,
    }, {
      imgelink:
      img7,
    }, {
      imgelink:
      img8,
    }, {
      imgelink:
      img9,
    },
    {
      imgelink:
      img2,
    },

  ];
 
  const [active, setActive] = React.useState(
    img1,
  );
 
  return (
    <>
    
    
    <div className="grid gap-5  bg-gray-300">
      
      <div className="mt-10  flex justify-center content-center">
        <img
          className="h-auto lg:w-3/5 w-4/5  rounded-lg  object-center md:h-[480px] "
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 m-3 gap-2 md:grid-cols-10 md:ml-5">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="lg:h-16 h-14 cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
    <CarSummary/>
    <Accordions/>
    </>
  );
}
export default FeaturedImageGallery;