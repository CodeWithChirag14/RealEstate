import React, { useState } from "react";
import './Header.css';

import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from 'react-scroll';



const Header = () => {
  const[menuOpened,setMenuOpened]=useState(false);
  const getMenuStyles=(menuOpened)=>{
   
    return {right:!menuOpened&&"-100%"}
   
  }

  return (
    <section className="h-wrapper ">
      <div className="flexCenter paddings  innerWidth h-container ">
     
     
        <img src="realestatelogo.png" alt="logo" width={250} />

       <OutsideClickHandler onOutsideClick={()=>{
        setMenuOpened(false)}}>
        <div className="flexCenter h-menu " style={getMenuStyles(menuOpened)}>
          <Link activeClass="active" duration={200} smooth spy  to="residencies">Residencies</Link>
          <Link activeClass="active" duration={200} smooth spy to="value">Our Value</Link>
          <Link  activeClass="active" duration={200} smooth spy to="contact" >Contact Us</Link>
          <Link activeClass="active" duration={200}  smooth spy to="getstarted">Get Started</Link>
          <button className="button">
          <Link activeClass="active" duration={200} smooth spy to="contact">Contact</Link>
          </button>
        </div>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
          
        </div>
        </OutsideClickHandler>

      </div>
    </section>
  );
};

export default Header;
