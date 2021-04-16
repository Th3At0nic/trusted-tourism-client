import React from "react";
import BarberInfo from "../BarberInfo/BarberInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <BarberInfo></BarberInfo>
    </div>
  );
};

export default Header;
