import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuHeader = (props) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="menu">
      <Link to="/schedule-delivery">
        <a
          href="#schedule-delivery"
          class={
            location.pathname === "/schedule-delivery" ? "active" : "not-active"
          }
        >
          Schedule Delivery
        </a>
      </Link>
      <Link to="/my-suppliers">
        <a
          href="#my-suppliers"
          class={
            location.pathname === "/my-suppliers" ? "active" : "not-active"
          }
        >
          My Suppliers
        </a>
      </Link>
      <Link to="my-shopping-list">
        <a
          href="#my-shopping-list"
          class={
            location.pathname === "/my-shopping-list"
              ? "active"
              : "my-shopping-list"
          }
        >
          My Shopping List
        </a>
      </Link>
      <Link to="my-account">
        <a
          href="#my-account"
          class={location.pathname === "/my-account" ? "active" : "not-active"}
        >
          My Account
        </a>
      </Link>
    </div>
  );
};

export default MenuHeader;
