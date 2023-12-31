import React from "react";
import img from "../assets/images/jocker.jpg";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import "./home.css";
import mg from "../assets/images/jocker.png"
import mgm from "../assets/images/jockerr.jpg"
import mgc from "../assets/images/jockerrr.jpg"

const Home = () => {
  return (
  

    

    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
         <i className="glow">Knowledge with</i> 
          <span className="text-brightGreen"><b> <i>Ai4ALL</i></b></span>
        </h2>
        <p className=" text-lightText mt-5 text-start gap-10">
        <b className="text-black">OUR MOTTO IS :</b> Providing The best technology free or at cheapest price
        and Making every poors smile celebrating every diwali together with the funds we
        recieved from your purchase.🫱🏻‍🫲🏼

        </p>

        <Link to="contact" spy={true} smooth={true} duration={500} className="gap-10 flex-auto">
          <Button title="Contact Us" />
        </Link>
      </div>

     <div class="container flex-auto gap-0 position-center px- py-">
      
      <div class="icon-image">
        <div class="icon">
          <img src={img} alt="" />
        </div>
        <div class="hover-image one">
          <div class="img">
            <img src={img} alt="" />
          </div>
          <div class="content">
            <div class="details">
              <div class="name">AI4ALL</div>
              <div class="job"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="icon-image">
        <div class="icon">
          <img src={mg} alt="" />
        </div>
        <div class="hover-image one">
          <div class="img">
            <img src={mg} alt="" />
          </div>
          <div class="content">
            <div class="details">
              <div class="name">AI4ALL</div>
              <div class="job"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="icon-image">
        <div class="icon">
          <img src={mgm} alt="" />
        </div>
        <div class="hover-image one">
          <div class="img">
            <img src={mgm} alt="" />
          </div>
          <div class="content">
            <div class="details">
              <div class="name">AI4ALL</div>
              <div class="job"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="icon-image">
        <div class="icon">
          <img src={mgc} alt="" />
        </div>
        <div class="hover-image one">
          <div class="img">
            <img src={mgc} alt="" />
          </div>
          <div class="content">
            <div class="details">
              <div class="name">AI4ALL</div>
              <div class="job"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Home;








