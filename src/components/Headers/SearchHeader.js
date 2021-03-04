import React from "react";
import { withRouter } from "react-router-dom";
import SearchDesktopHeader from "./components/SearchDesktopHeader";
const SearchHeader = (props) => {
  return (
    <header className={"header"}>
      <SearchDesktopHeader></SearchDesktopHeader>
    </header>
  );
};

export default withRouter(SearchHeader);
