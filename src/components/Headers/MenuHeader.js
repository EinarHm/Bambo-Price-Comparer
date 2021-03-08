import React from "react";
import LogoElement from "./components/LogoElement";
import Menu from "./components/Menu";

const MenuHeader = (props) => {
  return (
    <header>
      <div className="row-navbar">
        <LogoElement />
        <Menu />
      </div>
    </header>
  );
};

export default MenuHeader;
