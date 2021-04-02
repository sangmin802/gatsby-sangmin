import { useMemo } from "react";

export function useRefinedPost(c, t, post) {
  const refinedC = useMemo(() => {
    if (c === "All") return post;
    return post.reduce((prev, next) => {
      const {
        node: {
          frontmatter: { category },
        },
      } = next;
      if (category === c) prev.push(next);
      return prev;
    }, []);
  }, [c, post]);

  const refinedPost = useMemo(() => {
    return refinedC.reduce((prev, next) => {
      if (t === "All") return refinedC;
      const {
        node: {
          frontmatter: { tag },
        },
      } = next;
      if (tag === t) prev.push(next);
      return prev;
    }, []);
  }, [t, refinedC]);

  return { refinedPost };
}
