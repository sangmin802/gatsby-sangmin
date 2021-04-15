import React, { useCallback, useEffect, useMemo, useRef } from "react";

const Navigation = ({
  name,
  index,
  setNavigation,
  selected,
  type,
  scrollContainer,
}) => {
  const target = useRef(null);

  const scrollCenter = useCallback(() => {
    const { current } = target;
    scrollContainer(current);
  }, [scrollContainer, target]);

  const selectNavigation = useCallback(() => {
    setNavigation(index, type);
  }, [index, setNavigation, type]);

  const style = useMemo(() => {
    return index === selected ? { color: "#000" } : {};
  }, [index, selected]);

  useEffect(() => {
    if (selected === index) scrollCenter();
  }, [scrollCenter, selected, index]);

  return (
    <nav style={style} onClick={selectNavigation} ref={target}>
      {name}
    </nav>
  );
};

export default Navigation;
