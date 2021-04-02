import React from "react";
import Navigation from "../navigation/index";
import "./index.scss";

const NavigationContainer = ({ navigation, setNavigation, selected }) => {
  return (
    <nav className="horizontal-navigation">
      <div className="inner-navigation">
        {navigation.map(NAV => (
          <Navigation
            key={NAV}
            navigation={NAV}
            setNavigation={setNavigation}
            selected={selected}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavigationContainer;
