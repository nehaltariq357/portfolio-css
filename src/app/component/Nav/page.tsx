"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <nav className="main">
      <div className="logo">Nehal</div>
   
      
      {/* Desktop Links */}
      <ul className="gap">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/component/About">About</Link>
        </li>
        <li className="contact">
        <Link href="/component/Contact">Contact</Link>

        </li>
      </ul>

    

      {/* Hamburger Icon for Mobile */}
      <div className="hiddenOnDesktop">
        <button onClick={toggleMenu} className="btn1">
          <GiHamburgerMenu size={24} />
        </button>
      </div>

    </nav>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <ul className="list-non">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="/component/About">About</Link>
          </li>
          <li className="contact">
          <Link href="/component/Contact">Contact</Link>
        </li>
        </ul>
      </div>
    </>
   
  );
};

export default NavBar;
