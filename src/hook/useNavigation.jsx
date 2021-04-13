import { useCallback, useEffect, useState } from "react";

export function useNavigation() {
  const [navigation, setState] = useState({ category: 0, tag: 0 });
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
      window.history.replaceState(newNavigation, "", window.location.pathname);
    },
    [setState, navigation]
  );

  useEffect(() => {
    const history = window.history.state;
    if (!history.key) {
      setState({ ...history });
    }
    return;
  }, [setState]);

  return { navigation, setNavigation };
}
