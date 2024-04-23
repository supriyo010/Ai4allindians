import React from "react";
import youimageImg from "../assets/images/ui.png";
import Button from "../layout/Button";

export default function Course(){
return(

<div className=" flex flex-col items-center justify-between bg-[#e6f8e6] border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" w-5/5">
  <img src={youimageImg} alt="" title="ui/ux design" />
  
  <button className=" he bg-[#80df80] py-4"> <spam className="ki py-2 px-16 gap-6 text-xl  mb- mt-8   hover:text-[#f4f5f4] transition-all cursor-pointer">
   <b>   UI/UX Design</b> </spam></button>                                  
                 
 
        <p className="text-lightText text-center md:text-start">
        Master the art of UI/UX Design and create intuitive, visually appealing interfaces. 
          </p>
          <p className="text-lightText text-center md:text-start">
          Enroll in our UI/UX Design course to learn user interface and experience design principles, wireframing, prototyping, usability testing, and industry-standard tools, empowering you to create intuitive and visually appealing digital experiences.
          </p>
        
          </div>
          <a href="https://forms.gle/BVrghB6dTzpuvR82A">   <Button title="GO TO" /></a>
          </div>
           
     
)
}

