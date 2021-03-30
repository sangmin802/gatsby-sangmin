import React from "react";
import { Link } from "gatsby";
import "./index.scss";

const Thumbnail = ({ node }) => {
  const { fields, frontmatter, excerpt } = node;
  return (
    <article
      className={`thumbnail ${
        frontmatter.coverImage ? "thumbnail-reverse" : ""
      }`}
    >
      <Link to={fields.slug}>
        <h3 className="title">{frontmatter.title}</h3>
        <div className="desc">
          {frontmatter.coverImage && (
            <img
              className="imgWidth"
              src={frontmatter.coverImage}
              alt={frontmatter.coverImage}
            />
          )}
          {!frontmatter.coverImage && <p>{excerpt}</p>}
        </div>
      </Link>
    </article>
  );
};

export default Thumbnail;
