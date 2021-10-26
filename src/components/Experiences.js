import React from "react";
import logoSG from "../assets/experiences/logoSG.jpg";
import FDAX from "../assets/experiences/FDAX.png";
import Dev from "../assets/experiences/Dev.jpg";

const Experiences = () => {
  return (
    <div className="experiences">
      <div className="experiencesContainer">
        <h1>Experiences</h1>
        <div className="flexContainer">
          <div className="experience">
            <img src={Dev} alt="Web Development" />
            <h2>2021</h2>
            <h3>Front End Web Developer</h3>
            <p>
              I am currently learning Front End Web Development by completing
              challenges and creating web apps (as displayed in the projects
              section).
            </p>
          </div>
          <div className="experience">
            <img src={FDAX} alt="logo FDAX Eurex" />
            <h2>2017 - 2021</h2>
            <h3>Proper Trading, Market Finance</h3>
            <p>
              Trading the Eurex Market. Specialized on Dax30 Futures Index
              (FDAX).
            </p>
          </div>
          <div className="experience">
            <img
              src={logoSG}
              alt="logo Société Général Corporate and Investment Banking"
            />
            <h2>2015 - 2017</h2>
            <h3>
              Sales assistant in cross-assets structured products, Market
              Finance
            </h3>
            <p>
              Working as a sales analyst in Front-office in the SGCIB trading
              room at La Défense, Paris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
