import { useCallback, useState } from "react";

export function useNavigation(setTag = null) {
  const [state, setState] = useState("All");

  const setNavigation = useCallback(
    nav => {
      setState(nav);
      if (setTag) {
        setTag("All");
      }
    },
    [setState, setTag]
  );
  return { state, setNavigation };
}
