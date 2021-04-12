import React, { useCallback, useMemo } from "react";

const Navigation = ({ navigation, index, setNavigation, selected }) => {
  const selectNavigation = useCallback(() => {
    setNavigation(index);
  }, [index, setNavigation]);

  const style = useMemo(() => {
    return index === selected ? { fontWeight: "bold" } : {};
  }, [navigation, selected]);

  return (
    <div style={style} onClick={selectNavigation}>
      {navigation}
    </div>
  );
};

export default React.memo(Navigation, (left, right) => {
  const a = left.index == left.selected;
  const b = right.index == right.selected;
  if (a !== b) return false;
  return true;
});
