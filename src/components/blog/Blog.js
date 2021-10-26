import React, { Component } from "react";
import { articleList } from "../../datas/articleList";
import Article from "./Article";
import BlogFilter from "./BlogFilter";

class Blog extends Component {
  state = { articleList };

  render() {
    let { articleList } = this.state;
    return (
      <div>
        <BlogFilter articleList={articleList} />
        {articleList.map((item) => (
          <div key={item.id}>
            <Article
              cover={item.cover}
              title={item.title}
              content={item.content}
              link={item.link}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Blog;
