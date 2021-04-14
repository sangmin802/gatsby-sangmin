import React from "react";
import Navigation from "../navigation/index";
import "./index.scss";

const NavigationContainer = ({ nameArr, setNavigation, selected, type }) => {
  return (
    <article className="navigation">
      <div className="inner-navigation">
        {nameArr.map((name, index) => (
          <Navigation
            key={name}
            name={name}
            index={index}
            type={type}
            setNavigation={setNavigation}
            selected={selected}
          />
        ))}
      </div>
    </article>
  );
};

export default NavigationContainer;
