import React from "react";
import Experiences from "../Experiences";
import Hobbies from "../Hobbies";
// import { Grid } from '@mui/material';
import Identity from "../Identity";
import Projects from "../projects/Projects";
import Skills from "../Skills";
import Blog from "../blog/Blog";

const Layout = () => {
  return (
    <div className="layoutContainer">
      <div className="columnOne">
        <Identity />
        <Experiences />
        <Hobbies />
      </div>
      <div className="columnTwo">
        <Skills />
        <Projects />
        <Blog />
      </div>
    </div>
  );
};

export default Layout;
