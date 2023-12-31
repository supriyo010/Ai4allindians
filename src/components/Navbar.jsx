import React, { useState } from "react";
import { AiOutlineFileImage, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

import youimageImg from "../assets/images/ui.jpg";
import CoursesCard from "../layout/CoursesCard";
import image from "../layout/image";
import "./navbar-c.css";
import LoginPage from "./login/page";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg";
import abo from "../assets/abo.svg";
import log from "../assets/log.svg";
import rev from "../assets/rev.svg";
import cou from "../assets/cou.svg";
import hom from "../assets/hom.svg";
import knog from "../assets/knog.svg";
import mone from "../assets/images/mone.png";
import wha  from "../assets/images/wha.jpg";
import bar  from "../assets/images/bar.jpg";
import logo  from "../assets/images/logoo.png";
import ai from "../assets/ai4all.svg";



function Navbar() {
  const [menu, setMenu] = useState(false);
 
 const navigate=useNavigate();

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between  md:px-32 p-  bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
        <div >
          
        <div className="box flex flex-col items-center justify-between   ">
        <img src={ai} className="mobilel py-  px-0  mb-   "/>
        <img src={mone} alt="" className="mobile px-0 py-  inline-flex items-center "/> 
        </div>
        <Link to="/" className=" font-semibold text-xl p-30  cursor-pointe  flex flex-col md:flex-col gap-7 mt-6">
            
         
    
        
          </Link> 
          
        
         
        </div>
        
      
        <nav className="hidden md:flex gap-6 font-large p- text-lg ">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}

            
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
          <img src={hom} className="" />
           
          </Link>
        
          
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
         <img src={abo} className=""/>
           
           
          </Link>

          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
         
         <img src={cou} className=""/>
          </Link>
          
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
       <img src={rev} className=""/>
          </Link>
          <Link
            to="login"
            spy={true}
            smooth={true}
            duration={600}
            className="hover:text-[#539165] transition-all cursor-pointer"
          ><div>

          </div>
           
          <Link href={'/LoginPage'}></Link>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
          <img src={knog} className=""/>
          
          </Link>
  
          <img src={bar} alt="" className="bar px-8 py-6 flex flex-row" />
          
          
          
        

          
        </nav>
        

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-16">
            <AiOutlineMenu size={32} />
          </div>
        
        </div>
     
      </div>
      
        
      <div className="god flex flex-col md:flex-row gap-0 mt-1">
      
            
            
             </div>
        
        
            
      <div
        className={` ${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-[#faf6f6] left- top-100 font-large text-10xl text-center pt-16 pb-4 gap-8 w-full h-fit transition-transform duration-200 `}
      >    
           
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          HOME
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          COURSES
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          REVIEWS
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          CONTACT
        </Link>
        <Link
          to="login"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
            <Link href={'/LoginPage'}> login</Link>
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
