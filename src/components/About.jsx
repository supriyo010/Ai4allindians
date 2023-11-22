import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";
import "./about.css";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="About" title2="Us?" />
        <p className=" text-lightText"><img src="https://avatars.githubusercontent.com/u/122034818?s=400&u=b523d382d0aab4c8cb177f1f31debf7e7d99a5e3&v=4"className="png1" />
        <h1 className= "animate-pulse">SUPRIYO MAJI <h1 className= "animate-bounce" color="red">WEB WIZARD</h1> </h1>
        </p>
        
          <p className=" text-lightText"><img src="https://i.ibb.co/sHCTzty/tinywow-profile-photo-40989981-2.png" className="png1" />
          <h1 className= "animate-pulse">SHREYA MUKHERJEE <h1 className= "animate-bounce" color="red">APP ARCHITECT</h1> </h1>
        </p>
        <p className=" text-lightText"><img src="https://i.ibb.co/XjQdXys/tinywow-profile-photo-40988806-1.png" className="png1" />
        <h1 className= "animate-pulse">SUPRIYA GARH <h1 className= "animate-bounce" color="red">INSIGHT ILLUMINATOR </h1> </h1>

          
        </p>
        <p className=" text-lightText"><img src="https://i.ibb.co/GntqScw/tinywow-profile-photo-40993588-1.png" className="png1" />
        
        <h1 className= "animate-pulse">SABIR MALLIK<h1 className= "animate-bounce" color="red">SOCIAL MAVEN</h1> </h1>

          
        </p>
        <p className=" text-lightText"><img src="https://i.ibb.co/6HZtWYg/tinywow-profile-photo-40994231-1.png" className="png1" />
        
        <h1 className= "animate-pulse">PRITAM MAZUMDAR<h1 className= "animate-bounce" color="red">FOUNDER & MENTOR</h1> </h1>
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
