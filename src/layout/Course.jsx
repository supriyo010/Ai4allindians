import React from "react";
import youimageImg from "../assets/images/ui.png";
import Button from "../layout/Button";

export default function Course(){
return(

<div className=" flex flex-col items-center justify-between bg-[#e6f8e6] border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" w-3/5">
  <img src={youimageImg} alt="" title="ui/ux design" />
  <spam className="ki py-10 px-14 gap-6">
   <b>ui/ux design</b> </spam>
 
        <p className="text-lightText text-center md:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit this is the
          web
          </p>
          <p className="text-lightText text-center md:text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit this is the
          web</p>
        
          </div>
          <Button title="GO TO" />
          </div>
           

     
)
}