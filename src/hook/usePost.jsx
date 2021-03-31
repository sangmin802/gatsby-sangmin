import { useMemo, useState } from "react";

const POST_SIZE = 10;

const UsePost = (c, t, post) => {
  const refinedPost = useMemo(() => {
    return post.reduce((prev, next) => {
      const {
        node: {
          frontmatter: { category, tag = null },
        },
      } = next;
      if (category === c && tag === t) prev.push(next);
      return prev;
    }, []);
  }, [c, t, post]);

  return { refinedPost };
};

export default UsePost;
