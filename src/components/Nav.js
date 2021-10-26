import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="navigation">
      <div className="btnNav">
        <NavLink exact to={`${props.chemin}`}>
          <span>{props.children}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
