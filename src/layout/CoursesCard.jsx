import React from "react";
import webImg from "../assets/web-dev.svg";
import Button from "../layout/Button";

const CoursesCard = (props) => {
  return (
    <div className=" flex flex-col items-center justify-between bg-[#e6f8e6] border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" w-3/5">
        
        <img src={props.img} alt="img" />
      </div>
      <div>
       
          {props.title}
          <button className=" he bg-[#80df80] py-4"> <spam className="ki py-2 px-12 text-xl  mb- mt-8   hover:text-[#f4f5f4] transition-all cursor-pointer">
   <b> Web Development </b> </spam></button> 
     
        <p className="text-lightText text-center md:text-start">
        Join our Comprehensive Web Development course where you'll master HTML, CSS, JavaScript, front-end frameworks, back-end development with Node.js, database integration, and deployment strategies, with hands-on projects and expert guidance, preparing you for a successful career in web development.
          </p>
          <p className="text-lightText text-center md:text-start">

          </p>
       
      </div>
    <a href="https://forms.gle/99UJCGd9CicrpoEC8">  <Button title="GO TO" /></a>
    </div>
  );
};

export default CoursesCard;
