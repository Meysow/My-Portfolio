import React from "react";

const Project = (props) => {
  return (
    <div className="project">
      <div className="projectContainer">
        <a href={props.demo} target="_blank" rel="noreferrer">
          <img src={props.cover} alt={props.name} width="322" height="274" />
        </a>
        <div className="wrapper">
          <ul className="tags">
            {props.tags.map((tag, index) => (
              <li className="tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <h2 className="name">{props.name}</h2>
          <p className="blabla">{props.blabla}</p>
          <div className="buttons">
            <div className="demoContainer">
              <a
                className="demo"
                href={props.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
            <div className="gitContainer">
              <a
                className="git"
                href={props.git}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
