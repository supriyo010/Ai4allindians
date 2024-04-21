import React from "react";
import Heading from "../layout/Heading";
import ReviewCard from "../layout/ReviewCard";

import img1 from "../assets/images/Screenshot 2024-04-21 202205.png";
import img2 from "../assets/images/Screenshot 2024-04-21 202033.png";
import img3 from "../assets/images/Screenshot 2024-04-21 201726.png";
import ReviewCard1 from "../layout/ReviewCard1";
import ReviewCard2 from "../layout/ReviewCard2";

const Reviews = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-20 px-4">
      <Heading title1="Our" title2="Reviews" />

      <div className=" flex flex-col md:flex-row gap-7 mt-6">
        <ReviewCard img={img1} />
        <ReviewCard1 img={img2} />
        <ReviewCard2 img={img3} />
   
       
      </div>
    </div>
  );
};

export default Reviews;
