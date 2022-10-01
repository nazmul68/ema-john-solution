import React from "react";
import logo from "../../../src/images/favicon.ico";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div className="nav-menu">
          <a href="/Shop">Shop</a>
          <a href="/Orders">Orders</a>
          <a href="/Inventory">Inventory</a>
          <a href="/About">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
