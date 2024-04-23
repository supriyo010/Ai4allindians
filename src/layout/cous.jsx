import React from "react";
import appImg from "../assets/App-dev.svg";
import Button from "./Button";

export default function cous(){
return(

<div className=" flex flex-col items-center justify-between bg-[#e6f8e6] border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div className=" w-5/5">
  <img src={appImg} alt="" title="ui/ux design" className="" />
 <button className=" he bg-[#80df80] py-4"> <spam className="ki py-2 px-12 gap-6 text-xl  mb- mt-8   hover:text-[#f4f5f4] transition-all cursor-pointer">
   <b>App Development</b> </spam></button>
 
        <p className="text-lightText text-center md:text-start">
        This Mobile App Development course is the course for someone who wants to learn Mobile App development from scratch. 
          </p>
          <p className="text-lightText text-center md:text-start">
          Embark on our App Development course to master mobile app design and development using iOS and Android platforms, covering programming languages, UI/UX principles, API integration, and deployment strategies, enabling you to create innovative mobile applications.</p>
        
          </div>
          <a href="https://forms.gle/5Fqh96EJbfSWVfTH6">    <Button title="GO TO" /></a>
          </div>
           

     
)
}