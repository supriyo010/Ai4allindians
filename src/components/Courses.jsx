import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import Course from "../layout/Course";
import Cous from "../layout/cous";
import Crse from "../layout/crse";
import Cours from "../layout/cours.jsx";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";
import youimageImg from "../assets/images/ui.png";
import video from "../assets/images/video.webm";
import cer from "../assets/images/cer.png";
import "./courses.css";
const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Courses" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard img={webImg} title="" />
        <Course src img={youimageImg} title="ui/ux design" />
         <Cous img={appImg} title="App Development"/>
        <Crse img={graphicImg} title="Graphic Designer" />
        <Cours img={digitalImg} title="Digital Marketing" />
    
     
      </div>
      
      <div className=" flex flex-col items-center md:px-12 px-5 my-10 gap-4  ">
      <h1 className='text-4xl font-bold px-6 py-6 '> Sample  <a className='text-[#307430]'><i>Certificate</i></a></h1>
<div className="flex flex-col md:flex-row gap-7 mt-6 ">
 


      <img src={cer} className="cr "   />  
      <video width="620" height="440" controls autoplay >
        
        
        <source src={video} type="video/mp4" className="flex flex-col md:flex-row gap-7 mt-6" />
        <source src="movie.ogg" type="video/ogg"></source>
        
            <p>Sorry, your broswer doesn't support embedded videos. Here's the <a href="https://www.youtube.com/watch?v=A6O2aIYxByE&t=18s">Link to the video</a></p>

       </video>
      </div>
      
      </div>
     
    </div>
    
   
  );
};

export default Courses;
