/* eslint-disable react/prop-types */
import React from "react";
import BambooLogo from "../../../assets/images/bambooLogo.png";
import { Link } from "react-router-dom";
const LogoElement = () => {
  return (
    <div className="logoElement">
      <Link to="/">
        <img src={BambooLogo} alt="logo Bamboo" />
      </Link>
    </div>
  );
};
export default LogoElement;
