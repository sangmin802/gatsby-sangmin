import { useCallback, useState } from "react";

const UseNavigation = (setTag = null) => {
  const [state, setState] = useState(0);

  const setNavigation = useCallback(
    index => {
      setState(index);
      if (setTag) setTag(0);
    },
    [setState, setTag]
  );

  return { state, setNavigation };
};

export default UseNavigation;
