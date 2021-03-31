import React from "react";
import Navigation from "../navigation/index";

const NavigationContainer = ({ navigation, setNavigation, selected }) => {
  return (
    <nav>
      {navigation.map(NAV => (
        <Navigation
          key={NAV}
          navigation={NAV}
          setNavigation={setNavigation}
          selected={selected}
        />
      ))}
    </nav>
  );
};

export default NavigationContainer;
