import React from "react";
import MenuHeader from "./Headers/MenuHeader";
import PropTypes from "prop-types";

const Page = ({ children }) => (
  <div>
    <MenuHeader />
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
