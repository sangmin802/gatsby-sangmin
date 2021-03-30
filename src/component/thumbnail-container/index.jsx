import React from "react";
import Thumbnail from "../thumbnail/index";
import "./index.scss";

const ThumbnailContainer = ({ edges, type = "", title }) => {
  return (
    <section className={`thumbnail-container thumbnail-container${type}`}>
      <div className="title">{title}</div>
      <div className="content">
        {edges.map(({ node }) => (
          <Thumbnail node={node} key={node.id} />
        ))}
      </div>
    </section>
  );
};

export default ThumbnailContainer;
