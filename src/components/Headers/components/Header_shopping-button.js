import React from "react";
import { withRouter } from "react-router-dom";

const HeaderShoppingButton = (props) => {
  return (
    <div role="button" className="header-shopping-button">
      <div className="header-shopping-button-icon-wrapper">
        <span class="material-icons">attach_money</span>
      </div>
      <div className="header-shopping-button-text-wrapper">
        <span className="header-shopping-button-text-compare">Compare</span>
        <span className="header-shopping-button-text-products">
          62 Products
        </span>
      </div>
    </div>
  );
};

export default withRouter(HeaderShoppingButton);
