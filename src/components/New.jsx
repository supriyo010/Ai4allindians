import React, { useState } from "react";

import insta from "../assets/insta.svg";
import din from "../assets/din.svg";
import "./new.css";
import face from "../assets/face.svg";
import twwe from "../assets/twwe.svg";
import map from "../assets/images/map.png";
import pat from "../assets/pat.svg";
import patt from "../assets/patt.svg";
import hed from "../assets/images/hed.png";
import wha  from "../assets/images/wha.jpg";

const New = () => {
    return (
      <footer className="bg-light text-center">
        
        <div className="footer-container">
            
          <div className="footer-menu flex flex-col md-flex-col ">
            <ul>
              <li><a  href="https://www.instagram.com/ai4all_indians/"><img src={insta} alt="" className=" btn btn-floating m-1"/></a></li>
              <li><a href="https://www.linkedin.com/in/ai4all-indians/"><img src={din} alt="" className=" btn btn-floating m-1"/></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61554277933997"><img src={face} alt="" className=" btn btn-floating m-1"/></a></li>
              <li><a href="https://twitter.com/ai4all_india"><img src={twwe} alt="" className=" btn btn-floating m-1"/></a></li>
              
            </ul>
            <img align="right" src={wha} alt="" className="ap py- px-6  "/>
          </div>
        
      
        </div>
        <img align="right" src={hed} alt="" className="no py- px-2 "/>
        <div className=" flex flex-col items-center justify-between   "> 
       <a href="https://maps.app.goo.gl/RVJv4vLMmtC6GY9w9"> <img align="left" src={map} alt="" className="mo  py-6 px-5 " />
      
       < a href="https://" ><img align="right" src={pat} alt="" className="no py-  px-6" /></a>
       < a href="https://" ><img align="right" src={patt}  className="no py-  px-6 " /></a>

       </a>
    
      
        
     
       
        </div>
        
            
        <div className=" flex flex-col items-center justify-between bg-[#f7f6f6] px-6 py-6 ">        
        <p>
          @copyright developed by
          <span className="text-brightGreen px-2">supriyo</span>|
          All rights 
        </p>
      </div>
     
   
     
  
        <style jsx>{`
          footer {
           
            color: black;
            padding: 50px 0;
          }
  
          .footer-container {
            display: flex;
           width: 50%;
           height: 50%;
            align-items: center;
            
          }
  
          .footer-menu ul {
            list-style: none;
            padding: 0;
            display: flex;
          }
  
          .footer-menu li {
            margin-right: 20px;
          }
  
          .footer-menu a {
            text-decoration: none;
            color: #fff;
          }
  
          
  
          .copyright {
            text-align: center;
            margin-top: 20px;
          }
        `}</style>
        
      </footer>
      
    );
  };
  
  export default New;


   
