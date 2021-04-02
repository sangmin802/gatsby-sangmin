import { useCallback, useEffect } from "react";
import _ from "../utils/scrollPostProps";
import IO from "../utils/intersectionObserver";

export function useScrollPost(post, setPost) {
  const callback = useCallback(
    entries => {
      entries.forEach(entry => {
        if (_.count * _.size >= post.length) return;
        if (entry.intersectionRatio > 0) {
          _.count++;
          setPost(post.slice(0, (_.count + 1) * _.size));
        }
      });
    },
    [post, setPost]
  );

  useEffect(() => {
    const target = document.querySelector(".observer");
    const observer = IO.connectIO(target, callback);

    return () => {
      IO.disconnectIO(observer, target);
      _.count = 0;
    };
  }, [callback]);
}
