import React from "react";
import Navigation from "../navigation/index";
import "./index.scss";

const NavigationContainer = ({ navigation, setNavigation, selected }) => {
  return (
    <nav className="horizontal-navigation">
      <div className="inner-navigation">
        {navigation.map((name, index) => (
          <Navigation
            key={name}
            navigation={name}
            index={index}
            setNavigation={setNavigation}
            selected={selected}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationContainer;
