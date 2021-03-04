import React from "react";
import { withRouter, Link } from "react-router-dom";
import LogoElement from "./LogoElement";
import SearchBar from "./Header_search-bar";

const SearchDesktopHeader = (props) => {
  return (
    <div className="header__desktop row">
      <div className="header__desktop-logo">
        <Link to="/">
          <LogoElement />
        </Link>
      </div>
      <div className="header__desktop-search">
        <SearchBar />
      </div>
      <button className="header__desktop-browse">Browse</button>
      <div role="button" className="header__desktop-shopping_list">
        <div className="header__desktop-shopping_list-icon-wrapper">
          <span class="material-icons">attach_money</span>
        </div>
        <div className="header__desktop-shopping_list-text-wrapper">
          <span className="header__desktop-shopping_list-text-compare">
            Compare
          </span>
          <span className="header__desktop-shopping_list-text-products">
            62 Products
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchDesktopHeader);
