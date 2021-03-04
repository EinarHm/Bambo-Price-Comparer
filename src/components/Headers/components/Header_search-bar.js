import React from "react";
import { withRouter } from "react-router-dom";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <button className="search-bar-button">
        Products<span class="material-icons">expand_more</span>
      </button>

      <input
        className="search-bar-input"
        placeholder="Search for products..."
      />
      <span class="material-icons search-bar-icon">search</span>
    </div>
  );
};

export default withRouter(SearchBar);
