import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdown, SetIsProfileDropdown] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };
  const hadleProfileClick = () => {
    SetIsProfileDropdown(!isProfileDropdown);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="kite logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
              to="/dashboard"
            >
              <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
              to="/orders"
            >
              <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
              to="/holdings"
            >
              <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
              to="/positions"
            >
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
              to="/funds"
            >
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
              to="/apps"
            >
              <p className={selectMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={hadleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
