import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

import ai from "../assets/ai4all.svg";
import home from "../assets/home.svg";
import abo from "../assets/abo.svg";
import cou from "../assets/cou.svg";
import rev from "../assets/rev.svg";
import hom from "../assets/hom.svg";
import knog from "../assets/knog.svg";
import bar from "../assets/images/bar.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <div className="flex items-center">
          <img src={ai} alt="Ai4ALL" className="h-8 md:h-28 mr-2" />
          <Link to="/" className="font-semibold text-lg md:text-xl cursor-pointer">
            Ai4ALL
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 font-large text-lg">
          <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
            <img src={hom} alt="Home" className="h-5 md:h-28" />
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
            <img src={abo} alt="About" className="h-5 md:h-28" />
          </Link>
          <Link to="courses" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
            <img src={cou} alt="Courses" className="h-5 md:h-28" />
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
            <img src={rev} alt="Contact" className="h-5 md:h-28" />
          </Link>
          <Link to="login" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
            <div></div>
          </Link>
          <Link to="" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
            <img src={knog} alt="Knowledge" className="h-5 md:h-28" />
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={32} />
          </div>
        </div>
      </div>

      <div
        className={` ${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-[#faf6f6] left- top-100 font-large text-10xl text-center pt-6 pb-4 gap-4 w-full h-fit transition-transform duration-200`}
      >
        <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
          HOME
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
          ABOUT
        </Link>
        <Link to="courses" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
          COURSES
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
          CONTACT
        </Link>
        <Link to="login" spy={true} smooth={true} duration={500} className="hover:text-[#539165] transition-all cursor-pointer">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
