import React from "react";
import SearchHeader from "./Headers/SearchHeader";
import PropTypes from "prop-types";

const Page = ({ children }) => (
  <div>
    <SearchHeader />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
