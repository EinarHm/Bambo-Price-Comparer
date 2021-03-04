import React from "react";
import { withRouter, Link } from "react-router-dom";
import LogoElement from "./LogoElement";
import {} from "material-design-icons";

const SearchDesktopHeader = (props) => {
  return (
    <div className="header__desktop row">
      <div className="header__desktop-logo">
        <Link to="/">
          <LogoElement />
        </Link>
      </div>
      <div className="header__desktop-search">
        <button className="header__desktop-search-button">Products</button>
        <input
          className="header__desktop-search-input"
          placeholder="Search for products..."
        />
      </div>
      <button className="header__desktop-browse">Browse</button>
      <div role="button" className="header__desktop-shopping_list">
        <span class="material-icons">attach_money</span>
        <span>Compare</span>
      </div>
    </div>
  );
};

export default withRouter(SearchDesktopHeader);
