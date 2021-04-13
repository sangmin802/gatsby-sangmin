import React from "react";
import { Link } from "gatsby";
import "../style/global.scss";
import Head from "../component/head/index";
import Search from "../component/search/index";

const Layout = ({ children, title }) => {
  return (
    <div className="app">
      <Head title={title} />
      <header>
        <Link to="/">HOME</Link>
        <Link to="/post">POST</Link>
        <Search />
      </header>
      <main
        className="main-content"
        style={{ margin: "0 auto", maxWidth: "39rem" }}
      >
        {children}
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
