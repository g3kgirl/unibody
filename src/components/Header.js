import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "white",
        }}
      >
        <div style={{ width: "20%" }}>
          <a href="/">
            <img
              style={{ width: "134px", height: "40px" }}
              src="https://unibuddy.com/wp-content/themes/unibuddy/blemish/landing-page/build/images/unibuddy-logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className="header-link" style={{ width: "60%", display: "flex" }}>
          <Link>PRODUCTS</Link>
          <Link>PRODUCTS</Link>
          <Link>WHY UNNIBUDY</Link>
          <Link>LEARN</Link>
          <Link>ABOUT US</Link>
          <Link>CAREERS</Link>
          <Link>PARTENERS</Link>
          <Button text="BOOK A DEMO" />
        </div>
      </div>
    </>
  );
};

export default Header;
