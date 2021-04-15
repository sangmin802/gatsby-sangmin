import React, { useCallback, useRef } from "react";
import Navigation from "../navigation/index";
import "./index.scss";

const NavigationContainer = ({ nameArr, setNavigation, selected, type }) => {
  const container = useRef(null);
  const scrollContainer = useCallback(
    target => {
      const parent = container.current;
      const targetStart = target.getBoundingClientRect().x;
      const parentStart = parent.getBoundingClientRect().x;
      const prevScrolled = parent.scrollLeft;
      const targetWidth = target.clientWidth;
      const targetX = targetStart - parentStart;

      // Operates only when the change is in the parent internal area
      parent.scroll({
        left: targetX + prevScrolled - parent.clientWidth / 2 + targetWidth / 2,
        behavior: "smooth",
      });
    },
    [container]
  );
  return (
    <article className="navigation" ref={container}>
      {nameArr.map((name, index) => (
        <Navigation
          key={name}
          name={name}
          index={index}
          type={type}
          setNavigation={setNavigation}
          selected={selected}
          scrollContainer={scrollContainer}
        />
      ))}
    </article>
  );
};

export default NavigationContainer;
