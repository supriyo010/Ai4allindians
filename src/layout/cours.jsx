import React from "react";
import digitalImg from "../assets/digital.svg";
import Button from "./Button";

export default function cours(){
return(

<div className=" flex flex-col items-center justify-between bg-[#e6f8e6] border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" w-5/5">
  <img src={ digitalImg} alt="" title="ui/ux design" className="" />
  <button className=" he bg-[#80df80] py-4"> <spam className="ki   text-xl  mb- mt-8   hover:text-[#f4f5f4] transition-all cursor-pointer py-2 px-12 gap-6">
   <b>   Digital Marketing</b> </spam></button>                                  
 
        <p className="text-lightText text-center md:text-start">
        Enroll in this Graphic Design course to acquire knowledge to create graphics, and manipulate images and motions using Photoshop. Learn to design visual content to solve for real-time problems for free online.
          </p>
          <p className="text-lightText text-center md:text-start">
          Join our Digital Marketing course to explore strategies for SEO, SEM, social media marketing, email marketing, analytics, and content creation, empowering you to drive effective online campaigns and achieve business growth.</p>
        
          </div>
        <a href="https://forms.gle/K88254HVfTsYsaDp7">  <Button title="GO TO" /></a>
          </div>
           

     
)
}