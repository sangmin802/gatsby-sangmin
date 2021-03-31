import React, { useCallback, useMemo } from "react";

const Navigation = ({ navigation, index, setNavigation, selected }) => {
  const selectNavigation = useCallback(() => {
    setNavigation(index);
  }, [index, setNavigation]);

  const style = useMemo(() => {
    return index === selected ? { fontWeight: "bold" } : {};
  }, [index, selected]);

  return (
    <div style={style} onClick={selectNavigation}>
      {navigation}
    </div>
  );
};

export default Navigation;
