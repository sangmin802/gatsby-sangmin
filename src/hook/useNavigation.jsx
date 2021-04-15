import { useCallback, useState } from "react";

export function useNavigation() {
  const history = window.history.state;
  const rootState = history.key ? { category: 0, tag: 0 } : { ...history };

  const [navigation, setState] = useState(rootState);
  const setNavigation = useCallback(
    (nav, key) => {
      const newNavigation = { ...navigation };
      if (key === "category") {
        newNavigation.category = nav;
        newNavigation.tag = 0;
      } else if (key === "tag") {
        newNavigation.tag = nav;
      }
      setState(newNavigation);
      // window.history.replaceState(newNavigation, "", window.location.pathname);
    },
    [setState, navigation]
  );

  return { navigation, setNavigation };
}
