import { useMemo } from "react";

export function useRefinedPost(selectedC, selectedT, post) {
  const refinedC = useMemo(() => {
    return reducePosts(post, "category", selectedC);
  }, [selectedC, post]);

  const refinedPost = useMemo(() => {
    if (!selectedT) return refinedC;
    return reducePosts(refinedC, "tag", selectedT);
  }, [selectedT, refinedC]);

  return { refinedPost };
}

function reducePosts(post, type, selectType) {
  return post.reduce((prev, next) => {
    const prop = next.node.frontmatter[type];
    if (prop === selectType) prev.push(next);
    return prev;
  }, []);
}
