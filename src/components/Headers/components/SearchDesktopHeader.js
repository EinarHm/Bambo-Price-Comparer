import React from "react";
import { withRouter } from "react-router-dom";

const SearchDesktopHeader = (props) => {
  return (
    <div className="header__desktop row">
      <h1>This is a Header</h1>
    </div>
  );
};

export default withRouter(SearchDesktopHeader);
