import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ children, chemin }) => {
  return (
    <div className="btnNav">
      <NavLink exact to={`${chemin}`}>
        <span>{children}</span>
      </NavLink>
    </div>
  );
};

export default Nav;
