import React from "react";
import ProgressBar from "./ProgressBar";
import useViewport from "./hooks/Viewport";

const Skills = () => {
  const { width } = useViewport();
  const breakpoint = 1130;

  const languages = [
    { id: 1, value: "React", xp: 7 },
    { id: 2, value: "Javascript", xp: 8 },
    { id: 3, value: "CSS", xp: 10 },
    { id: 5, value: "SASS", xp: 6 },
    { id: 4, value: "MaterialUI", xp: 4 },
  ];
  const design = [
    { id: 1, value: "Figma", xp: 5 },
    { id: 2, value: "Photoshop", xp: 6 },
    { id: 3, value: "GIMP", xp: 8 },
  ];

  return width <= breakpoint ? (
    <ProgressBar
      title="FRONT END"
      languages={languages}
      className="languageDisplay"
    />
  ) : (
    <div className="skills">
      <ProgressBar
        title="FRONT END"
        languages={languages}
        className="languageDisplay"
      />
      <ProgressBar
        title="DESIGN"
        languages={design}
        className="designDisplay"
      />
    </div>
  );
};

export default Skills;
