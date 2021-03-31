import React, { useCallback, useMemo } from "react";

const Navigation = ({ navigation, setNavigation, selected }) => {
  const selectNavigation = useCallback(() => {
    setNavigation(navigation);
  }, [navigation, setNavigation]);

  const style = useMemo(() => {
    return navigation === selected ? { fontWeight: "bold" } : {};
  }, [navigation, selected]);

  return (
    <div style={style} onClick={selectNavigation}>
      {navigation}
    </div>
  );
};

export default Navigation;
