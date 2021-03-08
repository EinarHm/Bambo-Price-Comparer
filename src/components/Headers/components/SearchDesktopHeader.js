import React from "react";
import { withRouter } from "react-router-dom";
import LogoElement from "./LogoElement";
import SearchBar from "./Header_search-bar";
import ShoppingButton from "./Header_shopping-button";

const SearchDesktopHeader = (props) => {
  return (
    <div className="header__desktop row">
      <LogoElement />{" "}
      <div className="header__desktop-search">
        <SearchBar />
      </div>
      <button className="header__desktop-browse">Browse</button>
      <ShoppingButton />
    </div>
  );
};

export default withRouter(SearchDesktopHeader);
