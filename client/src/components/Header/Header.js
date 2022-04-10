import React from "react";
import Form from "../Form/Form";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_parent">
      <div className="header_container">
        <div className="overlay_txt">
          <h1>
            Call now for our best deal
            <br /> <span className="header_num">0406 381 001</span>
          </h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Header;
