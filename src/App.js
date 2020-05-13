import React from "react";
import "./styles.css";
import { withTranslation } from "react-i18next";
import Navigation from "./navigation";

export default function App() {
  const Nav = withTranslation()(Navigation);
  return (
    <div className="App">
      <Nav />
    </div>
  );
}
