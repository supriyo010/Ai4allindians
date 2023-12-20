import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";
import youimageImg from "../assets/images/ui.jpg";

import cer from "../assets/images/cer.png";
import "./courses.css";
const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Courses" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard img={webImg} title="Web Development" />
        <CoursesCard img={youimageImg} title="ui/ux design" />
    
        <CoursesCard img={appImg} title="App Development"/>
        <CoursesCard img={graphicImg} title="Graphic Designer" />
        <CoursesCard img={digitalImg} title="Digital Marketing" />
    
     
      </div>
      
      <div className=" flex flex-col items-center md:px-12 px-5 my-10 gap-4  ">
      <h1 className='text-6xl font-bold px-6 py-6 '>Certificate</h1>
<div className=" inline-flex items-center  ">
 


      <img src={cer} className="cr"   />  
 
      </div>

      </div>
    </div>
   
  );
};

export default Courses;
