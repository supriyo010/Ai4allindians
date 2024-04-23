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
          Enroll in our Graphics Design course to delve into visual communication, typography, image editing, branding, and industry-standard software tools, honing your skills to craft captivating designs for print and digital media.</p>
        
          </div>
          <a href="https://forms.gle/sxfLEctJPpZ4hMpCA">     <Button title="GO TO" /> </a>
          </div>
           

     
)
}