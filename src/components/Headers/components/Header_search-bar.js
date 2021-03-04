import React from "react";
import { withRouter } from "react-router-dom";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <button className="search-bar-button">Products</button>
      <input
        className="search-bar-input"
        placeholder="Search for products..."
      />
    </div>
  );
};

export default withRouter(SearchBar);
