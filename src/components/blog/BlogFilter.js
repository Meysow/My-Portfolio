import React from "react";

const ArticleFilter = (props) => {
  return (
    <div className="articleFilter">
      <div className="articleFilterContainer">
        <span>Articles({props.articleList.length})</span>
      </div>
    </div>
  );
};

export default ArticleFilter;
