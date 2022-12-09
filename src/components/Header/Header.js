import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <>
      <section className="header font-inter">
        <div className="header__logo">
          <div className="header__gray-box"></div>
          <div className="header__text">Medical Darpan</div>
        </div>

        <ul className="header__links">
          <li className="header__link-items">Home</li>
          <li className="header__link-items">Products</li>
          <li className="header__link-items">Distributors</li>
          <li className="header__link-items">Manufacturers</li>
          <li className="header__link-items">About Us</li>
          <li className="header__link-items">Blog</li>
        </ul>

        <div className="header__user-control">
          <div className="header__text">Login</div>
          <span className="material-symbols-outlined">account_circle</span>
        </div>
      </section>
    </>
  );
};

export default Header;
