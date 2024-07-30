import React, { Component } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItem = ["Home", "About Us", "Create Itinerary", "Destination", "Search"];

  const navData = navItem.map(menuItem => (
    <li key={menuItem}>{navItem}</li>
  ))
  return (
    <>
      <div className="menu-item">{navItem}</div>    
      </>
  );
};
export default Navbar;
