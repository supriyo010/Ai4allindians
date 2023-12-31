import React from "react";
import graphicImg from "../assets/graphic.svg";
import Button from "./Button";

export default function crse(){
return(

<div className=" flex flex-col items-center justify-between bg-[#e6f8e6] border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" w-5/5">
  <img src={graphicImg} alt="" title="ui/ux design" className="" />
  <button className=" he bg-[#80df80] py-4"> <spam className="ki py-2 px-12 gap-6 text-xl  mb- mt-8   hover:text-[#f4f5f4] transition-all cursor-pointer">
   <b> Graphic Designer</b> </spam></button>                           
        <p className="text-lightText text-center md:text-start">
        Master the basics of digital marketing with our free course accredited by Interactive Advertising Bureau Europe and The Open University. 
          </p>
          <p className="text-lightText text-center md:text-start">
          There are 26 modules to explore, all created by Google trainers, packed full of practical exercises and real-world examples to help you turn knowledge into action</p>
        
          </div>
          <a href="https://www.mygreatlearning.com/academy/learn-for-free/courses/intro-to-graphic-design-with-photoshop">     <Button title="GO TO" /> </a>
          </div>
           

     
)
}