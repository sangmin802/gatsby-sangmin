import React from "react";
import "../style/global.scss";

const Layout = ({ children }) => {
  return (
    <>
      <header>header</header>
      <main style={{ margin: "0 auto", maxWidth: "39rem" }}>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
