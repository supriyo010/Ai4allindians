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


function Navbar() {
  const [menu, setMenu] = useState(false);
 
 const navigate=useNavigate();

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-0   px-0 md:px-20 bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
        <div>
       
          <Link to="/" className=" font-semibold text-4xl p-30  cursor-pointe">
            
          
             <img src="https://media.licdn.com/dms/image/D5603AQGIf9HPUpCiSg/profile-displayphoto-shrink_800_800/0/1700487929586?e=1706140800&v=beta&t=bSP8pr6rwzw1xGW-Xw8T7tj7LttPPIwd1CS0Aw7QDbs" className="goat"  />
             
           
          </Link> 
          
        
         
        </div>
        
      
        <nav className="hidden md:flex gap-0 font-medium p-10 text-lg "><img src={hom} className="map" />
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}

            
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            HOME
           
          </Link>
          <img src={abo} className="map"/>
          
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            ABOUT
           
           
          </Link>
          <img src={cou}   className="map"/>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
           <h1 className="uuo"> </h1>
           <img src={mone} alt="" />
          </Link><img src={rev} className="map"/>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            REVIEWS
          </Link><img src={log} className="map"/>
          <Link
            to="login"
            spy={true}
            smooth={true}
            duration={600}
            className="hover:text-[#539165] transition-all cursor-pointer"
          ><div>

          </div>

          <Link href={'/LoginPage'}>Login</Link>
          </Link><img src={log} className="map"/>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
          Ai4ALL24*7
          </Link>
          <Link href={'/register'} className='bg-primary text-black px-8 rounded-full'>
        REGISTER
          </Link>

          
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        
        </div>
     
      </div>
  
      <div className="god">
             <img src={mone} alt="" className="swag px-0 py-0 inline-flex items-center item-center border-x-cyan-300 shadow-xl"/> 
            
             </div>
        
        
            
      <div
        className={` ${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-[#faf6f6] left- top-100 font-large text-10xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
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
