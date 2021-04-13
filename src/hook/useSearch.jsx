import { useState, useCallback, useEffect } from "react";

export function useSearch() {
  const [search, setSearch] = useState(null);

  const changeSearch = useCallback(value => {
    setSearch(value);
  }, []);

  useEffect(() => {
    const windowEvent = function () {
      setSearch(null);
    };
    setSearch(null);

    window.addEventListener("click", windowEvent);

    return () => {
      window.removeEventListener("click", windowEvent);
    };
  }, []);

  return [search, changeSearch];
}
