import React from "react";
import "./header.css";
import CTA from "./CTA";
import Mee from "../../assets/Mee.jpeg"
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Deepali Sharma</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={Mee} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
