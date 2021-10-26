import React from "react";
import { NavLink } from "react-router-dom";
import notFound from "../assets/notFound/notFound.jpg";

const NotFound = () => {
  var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${notFound})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="notFound" style={sectionStyle}>
      <div className="notFoundWrapper">
        <header class="header">
          <h2>404 Not Found</h2>
        </header>
        <div class="content">
          <h1 class="title">I have bad news for you</h1>
          <p class="text">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <div className="btnNavNotFound">
            <NavLink exact to="/">
              Homepage
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
