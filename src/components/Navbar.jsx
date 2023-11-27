import React, { useState } from "react";
import { AiOutlineFileImage, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import login from "../components/login.jsx";
import youimageImg from "../assets/images/ui.jpg";
import CoursesCard from "../layout/CoursesCard";
import image from "../layout/image";
import "./navbar-c.css";
import "./login.jsx";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
 
 const navigate=useNavigate();

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-0 px-0 md:px-20 bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative ">
        <div>
          <Link to="/" className=" font-semibold text-4xl p-30  cursor-pointe">
            
          
             <img src="https://media.licdn.com/dms/image/D5603AQGIf9HPUpCiSg/profile-displayphoto-shrink_800_800/0/1700487929586?e=1706140800&v=beta&t=bSP8pr6rwzw1xGW-Xw8T7tj7LttPPIwd1CS0Aw7QDbs" className="goat"  /> 
            
        

          </Link>
         
        </div>

        <nav className="hidden md:flex gap-8 font-medium p-8 text-lg ">
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
            ABOUT
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
            to="login"
            spy={true}
            smooth={true}
            duration={600}
            className="hover:text-[#539165] transition-all cursor-pointer"
          ><div>

           <button onclick={()=>{navigate('login',{replace: true})}}> LOGIN</button></div>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
          Ai4ALL24*7
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
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
          LOGIN
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
