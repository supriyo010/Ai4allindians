import React from "react";
import img from "../assets/hero.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import "./home.css";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
         <i className="glow">Knowledge with</i> 
          <span className="text-brightGreen"><b> <i>Ai4ALL</i></b></span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
        Our motto is : Providing The best technology free or at cheapest price
        and Making every poors smile celebrating every diwali together with the funds we
        recieved from your purchase.🫱🏻‍🫲🏼

        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
