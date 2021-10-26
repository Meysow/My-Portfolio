import React from "react";

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Experience</span>
        <span>6 Months</span>
        <span>1 Year</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let xpYears = 12;
          let progressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="fullBar">
                <div
                  className="progressBar"
                  style={{ width: progressBar }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
