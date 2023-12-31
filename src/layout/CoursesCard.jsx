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
        In this Responsive Web Design Certification, you'll learn the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design.

First, you'll build a cat photo app to learn the basics of HTML and CSS. Later, you'll learn modern techniques like CSS variables by building a penguin, and best practices for accessibility by building a web form.


          </p>
          <p className="text-lightText text-center md:text-start">
          Finally, you'll learn how to make webpages that respond to different screen sizes by building a Twitter card with Flexbox, and a complex blog layout with CSS Grid.
          </p>
       
      </div>
    <a href="https://www.coursera.org/courses?query=web%20deve">  <Button title="GO TO" /></a>
    </div>
  );
};

export default CoursesCard;
