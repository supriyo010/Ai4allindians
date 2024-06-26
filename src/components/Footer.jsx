import React from "react";
import { Link } from "react-scroll";
import login from "./login/page.jsx";
import insta from "../assets/insta.svg";
import "./footer.css";
import neg from "../assets/images/neg.mp4";
const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row justify-between bg-white border-2 border-lightText rounded-lg md:px-32 p-5">
        <div className="flex flex-col md:flex-row gap-5 font-medium p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
          
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
            Courses
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Contact
          </Link>
        
          <div
            to="login"
            
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            login
            </div>
        </div>

       

  <div className="mt-2 text-sm">
    Address: 101, Netaji Subhash Road, A-Zone, Durgapur, West Bengal 713204 <br />
    Contact No: 7908680668 <br />
    Email: ai4all.linkedin@gmail.com <br />
  </div>
</div>
        
      </div>
  
      
     
 
  );
};

export default Footer;
