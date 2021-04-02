import { useCallback, useEffect, useState } from "react";
import _ from "../utils/scrollPostProps";

export function usePost(post) {
  const [state, setState] = useState(post.slice(0, _.size));

  const setPost = useCallback(
    newPost => {
      setState(newPost);
    },
    [setState]
  );

  useEffect(() => {
    setPost(post.slice(_.count, _.size));

    return () => {
      _.count = 0;
    };
  }, [post]);

  return { state, setPost };
}
