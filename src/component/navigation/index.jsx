import React, { useCallback, useMemo } from "react";

const Navigation = ({ name, index, setNavigation, selected, type }) => {
  const selectNavigation = useCallback(
    e => {
      setNavigation(index, type);

      const visibleWidth = document.querySelector(".fixed-navigation")
        .clientWidth;
      const parentNode = e.target.parentNode;
      const parentWidth = parentNode.clientWidth;
      const half = visibleWidth / 2;
      const parentX = parentNode.getBoundingClientRect().x;
      const targetX = e.target.getBoundingClientRect().x;
      const relativeX = targetX - parentX;
      let gap = 0;
      let targetWidth = 0;
      if (relativeX > half) {
        gap = relativeX - half;
        targetWidth = e.target.getBoundingClientRect().width / 2;
      }
      if (relativeX >= parentWidth / 2) {
        targetWidth = 0;
        gap = parentWidth - visibleWidth;
      }
      const style = `
        transform : translate(${-(gap + targetWidth)}px)
      `;
      parentNode.setAttribute("style", style);
    },
    [index, setNavigation, type]
  );

  const style = useMemo(() => {
    return index === selected ? { color: "#000" } : {};
  }, [index, selected]);

  return (
    <nav style={style} onClick={selectNavigation}>
      {name}
    </nav>
  );
};

export default Navigation;
