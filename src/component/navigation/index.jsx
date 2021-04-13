import React, { useCallback, useMemo } from "react";

const Navigation = ({ name, index, setNavigation, selected, type }) => {
  const selectNavigation = useCallback(() => {
    setNavigation(index, type);
  }, [index, setNavigation, type]);

  const style = useMemo(() => {
    return index === selected ? { fontWeight: "bold" } : {};
  }, [index, selected]);

  return (
    <div style={style} onClick={selectNavigation}>
      {name}
    </div>
  );
};

export default Navigation;
