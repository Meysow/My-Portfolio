import React from "react";
import Experiences from "../Experiences";
import Hobbies from "../Hobbies";
// import { Grid } from '@mui/material';
import Identity from "../Identity";
import Projects from "../projects/Projects";
import Skills from "../Skills";
import Blog from "../blog/Blog";
import useViewport from "../hooks/Viewport";

const SmallLayout = () => {
  const { width } = useViewport();
  const breakpoint = 730;

  return width >= breakpoint ? (
    <div className="smallLayoutContainer">
      <Identity />
      <div className="wrapper">
        <div className="column1">
          <Skills />
          <Hobbies />
        </div>
        <div className="column2">
          <Blog />
          <Experiences />
        </div>
      </div>
      <Projects />
    </div>
  ) : (
    <div className="smallLayoutContainer">
      <Identity />
      <Skills />
      <Projects />
      <Experiences />
      <Hobbies />
      <Blog />
    </div>
  );
};

export default SmallLayout;
