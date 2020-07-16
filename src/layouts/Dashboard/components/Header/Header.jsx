import React from "react";
import "./Header.scss";
import logo from "../../../../assets/images/logo.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="container header_wrapper">
        <div className="logo-container">
          <img src={logo} alt="logo" className="app-logo" />
          <span>Expense Tracker</span>
        </div>
        <div className="additional_controls">
          <p className="img-holder">S</p>
          <p className="user-name">Algorithm Sam</p>
          <span>
            <svg
              className="dropdown"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="11.1803"
                y2="-0.5"
                transform="matrix(0.707107 0.707107 -0.141421 0.989949 0 1)"
                stroke="#7A7B86"
              />
              <line
                y1="-0.5"
                x2="11.1803"
                y2="-0.5"
                transform="matrix(0.707107 -0.707107 0.141421 0.989949 8 8.9057)"
                stroke="#7A7B86"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
