import { useEffect } from "react";
import _ from "../utils/scrollPostProps";

const UseIntersectionObserver = (post, setPost) => {
  useEffect(() => {
    const callback = entries => {
      entries.forEach(entry => {
        if (_.count * _.size >= post.length) return;
        if (entry.intersectionRatio > 0) {
          _.count++;
          setPost(post.slice(0, (_.count + 1) * _.size));
        }
      });
    };
    const observer = new IntersectionObserver(callback);
    const target = document.querySelector(".observer");
    observer.observe(target);

    return () => {
      observer.unobserve(target);
      _.count = 0;
    };
  }, [post, setPost]);
};

export default UseIntersectionObserver;
