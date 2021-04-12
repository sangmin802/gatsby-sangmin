import { useCallback, useEffect, useState } from "react";

export function useNavigation(resetKey = null) {
  const [state, setState] = useState(0);

  const setNavigation = useCallback(
    nav => {
      setState(nav);
    },
    [setState]
  );

  useEffect(() => {
    return () => (resetKey ? setState(0) : null);
  }, [resetKey, setState]);
  return { state, setNavigation };
}
