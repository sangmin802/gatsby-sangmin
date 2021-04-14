import { useCallback, useEffect, useState } from "react";
import _ from "../utils/scrollPostProps";

export function usePost(refinedPost) {
  const [state, setState] = useState(refinedPost.slice(0, _.size));

  const setPost = useCallback(
    newPost => {
      setState(newPost);
    },
    [setState]
  );

  useEffect(() => {
    setPost(refinedPost.slice(0, _.size));

    return () => {
      _.count = 0;
    };
  }, [refinedPost]);

  return { state, setPost };
}
