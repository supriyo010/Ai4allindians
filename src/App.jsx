import React from "react";
import { Route, BrowserRouter as Router, useNavigate } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import New from "./components/New";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import { AiOutlineLogin } from "react-icons/ai";
import LoginPage from "./components/login/page";
import RegisterPage from "./components/register/page";




const App = () => {
  
  return (
    <Router>
      <div>
        <Navbar />
        




        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="courses">
            <Courses />
          </div>

          <div id="reviews">
            <Reviews />
          </div>

          <div id="contact">
            <Contact />
          </div>
         <div id ="todo">
          <LoginPage />
         </div>
       <RegisterPage></RegisterPage>
             
       
        </main>
        
        <Footer/>
        <New/>
      
      </div>
    </Router>
    
  );
};

export default App;
