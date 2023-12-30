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
          </div>
    
        </div>
           
       <a href="https://maps.app.goo.gl/RVJv4vLMmtC6GY9w9"> <img align="left" src={map} alt="" className="mo  py-28 px-10 " /></a>
       
        <img align="center" src={hed} alt="" className="no py-2 px-0"/>
       
       
        <div className="row-spa col-span-2">
        <img align="right" src={pat} alt="" className="no py-  px-12" />
      
        <img align="" src={patt}  className="no py-  px-12 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" />
     
        </div>
        
       
     
        
  
        <div className=" text-center mt-4"> 
     
        <div className=" text-center mt-4">
        
        <p>
          @copyright developed by
          <span className="text-brightGreen px-2">supriyo</span>|
          All rights 
        </p>
      </div>
    
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


   
