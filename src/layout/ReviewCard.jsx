import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div>
        <p className=" text-lightText">
        Great initiative by a student. One day it will be a big platform for everyone to learn such a thing which is not taught in any institute.
God bless you. ❤️
        </p>
      </div>

      <div className=" flex flex-row justify-center">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
      </div>
    </div>
  );
};

export default ReviewCard;
