import { useMemo, useState } from "react";

const POST_SIZE = 10;

const UsePost = (c, t, post) => {
  const refinedPost = useMemo(() => {
    if (c === "All") return post;
    return post.reduce((prev, next) => {
      const {
        node: {
          frontmatter: { category, tag },
        },
      } = next;
      // 태그가 All일 경우, 동일한 카테고리만
      if (t === "All" && category === c) prev.push(next);
      // 태그가 All이 아닐 경우, 둘다 동일한 경우만
      if (category === c && tag === t) prev.push(next);
      return prev;
    }, []);
  }, [c, t, post]);
  return { refinedPost };
};

export default UsePost;
