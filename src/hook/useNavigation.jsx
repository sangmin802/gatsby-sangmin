import { useCallback, useReducer } from "react";

export function useNavigation(reducer, initialState) {
  const [navigation, setState] = useReducer(reducer, initialState);
  const setNavigation = useCallback((nav, type) => {
    setState({ type, nav });
  }, []);

  return { navigation, setNavigation };
}
