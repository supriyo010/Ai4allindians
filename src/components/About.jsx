import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";
import "./about.css";


const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-4 md:mx-41 mx-5 mt-14">
      <div className=" w-full md:w-2/4 px-8">
     

        <img src={img} alt="img" />
        <div className="he px-16 py-8 text-center space-y-2 w-full">
        <Heading title1="What" title2="We do?" /></div>
        <div className=" flex flex-col items-center justify-between bg-[#e6f8e6] border-2 border-lightText md:border-none md:w-5/5 p-3 cursor-pointer rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <h1 className="bo px-16" ><b className="animate:front"><i>"WE PROVIDE FREE CERTIFIED COURSES, e-BOOKS & AI TOOLS FROM TOP EXPERTS AND OTHER INTERESRTING INTERNSHIP OPPUTUNITIES WITH GOVERNMENT OF INDIA CERTIFICATIONS AND BONUS GIFTS AS WELL. DEDICATED COMMUNITY FOR ALL DOUBTS AND UPDATES OF UPCOMING EVENTS. ALSO OFFERS A FREE PLATFORM FOR ALL TEACHERS WHO WANT TO DELIVER THEIR SUBJECTS ON OUR PLATFORM AND EARN. WE ARE NON PROFIT ORGANIZATIONS DONATES ALL OUR SERVICE CHARGES TO NEEDY AND GREEDY PEOPLE AT DIWALI EVERY YEAR"</i></b></h1>
      </div>
      </div>



      <div className="w-full md:w-2/4 text-center space-y-2">
              <Heading title1="About" title2="Us" />
        <p className=" text-lightText"><img src="https://i.ibb.co/7ChYGH3/profile-pic-9.png" className="png1" />
        
        <h1 className= "animate-pulse"> PRITAM MAZUMDAR<h1 className= "animate-bounce" color="red"><b><i>FOUNDER & MENTOR</i></b> </h1> </h1>
        </p>
        <p className=" text-lightText"><img src="https://i.ibb.co/3CLC31P/tamal.png" className="png1" />
          <h1 className= "animate-pulse">TAMAL MAITY<h1 className= "animate-bounce" color="red"><b><i>TECH ASSIST</i></b> </h1> </h1>
        </p>

        <p className=" text-lightText"><img src="https://avatars.githubusercontent.com/u/122034818?s=400&u=b523d382d0aab4c8cb177f1f31debf7e7d99a5e3&v=4"className="png1" />
        <h1 className= "animate-pulse">SUPRIYO MAJI <h1 className= "animate-bounce" color="red"><b><i>WEB WIZARD</i></b></h1> </h1>
        </p>
        
         
        <p className=" text-lightText"><img src="https://i.ibb.co/tZRNmQm/tinywow-profile-photo-40988806-1.png" className="png1" />
        <h1 className= "animate-pulse">SUPRIYA GHAR <h1 className= "animate-bounce" color="red"><b><i>INSIGHT ILLUMINATOR</i></b> </h1> </h1>

          
        </p>
        <p className=" text-lightText"><img src="https://i.ibb.co/GntqScw/tinywow-profile-photo-40993588-1.png" className="png1" />
        
        <h1 className= "animate-pulse">SABIR MALLICK<h1 className= "animate-bounce" color="red"><b><i>SOCIAL MAVEN</i></b></h1> </h1>

          
        </p>
        <p className=" text-lightText"><img src="https://i.ibb.co/5KwcNqr/1702408917136.jpg" className="png1" />
        
        <h1 className= "animate-pulse">AVISHEK MUKHERJEE<h1 className= "animate-bounce" color="red"><b><i></i></b></h1> </h1>

          
        </p>
        
        
       
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
