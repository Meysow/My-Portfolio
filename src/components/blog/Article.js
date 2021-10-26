import React from "react";

const Article = (props) => {
  return (
    <div className="article">
      <div className="articleContainer">
        <img src={props.cover} alt={props.title} width="467" height="357" />
        <div className="wrapper">
          <div className="header">
            <h3>blog</h3>
            <h2>{props.title}</h2>
          </div>
          <p>
            In this article I tell the story about Proin eu justo sit amet lacus
            bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
          </p>
          <p className="last">
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
          <a href={props.link}>dev.to</a>
        </div>
      </div>
    </div>
  );
};

export default Article;
