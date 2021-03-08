import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuHeader = (props) => {
  const location = useLocation();

  return (
    <div className="menu">
      <Link
        to="/schedule-delivery"
        className={
          location.pathname === "/schedule-delivery" ? "active" : "not-active"
        }
      >
        Schedule Delivery
      </Link>
      <Link
        to="/my-suppliers"
        className={
          location.pathname === "/my-suppliers" ? "active" : "not-active"
        }
      >
        My Suppliers
      </Link>
      <Link
        to="my-shopping-list"
        className={
          location.pathname === "/my-shopping-list"
            ? "active"
            : "my-shopping-list"
        }
      >
        My Shopping List
      </Link>
      <Link
        to="my-account"
        className={
          location.pathname === "/my-account" ? "active" : "not-active"
        }
      >
        My Account
      </Link>
    </div>
  );
};

export default MenuHeader;
