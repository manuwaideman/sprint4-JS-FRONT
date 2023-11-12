import './css/style.css';
import React, { useState, useEffect } from 'react';
import SmoothScroll from 'smoothscroll-polyfill';
import logo from './images/logo.png';
import menu from './images/menu.png';

function Banner() {
  return (
    <section id="banner">
      <img className="logo" src={logo} alt="Logo" />

      <div className="banner-text">
        <h1>Green Sense</h1>
        <p>Sua vida. Seu lixo. Nossa responsabilidade.</p>
        <div className="banner-btn">
          <a href="#feature"><span></span>Saiba Mais</a>
          <a href="#footer"><span></span>Sobre Nós</a>
        </div>
      </div>
    </section>
  );
}

function SideNav({ isSideNavOpen, handleAnchorClick }) {
  return (
    <div id="sideNav" style={{ right: isSideNavOpen ? "0" : "-250px" }}>
      <nav>
        <ul>
          <li><a href="#banner" onClick={handleAnchorClick}>Menu</a></li>
          <li><a href="#feature" onClick={handleAnchorClick}>Proposta</a></li>
          <li><a href="#service" onClick={handleAnchorClick}>Problema</a></li>
          <li><a href="#testimonial" onClick={handleAnchorClick}>Solução</a></li>
          <li><a href="#footer" onClick={handleAnchorClick}>Sobre Nós</a></li>
        </ul>
      </nav>
    </div>
  );
}

function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    SmoothScroll.polyfill();
  }, []);

  const handleMenuClick = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleAnchorClick = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
      <Banner />
      <SideNav isSideNavOpen={isSideNavOpen} handleAnchorClick={handleAnchorClick} />

      <div id="menuBtn" onClick={handleMenuClick}>
        <img src={menu} alt="Menu" id="menu" />
      </div>
    </>
  );
}

export default Header;