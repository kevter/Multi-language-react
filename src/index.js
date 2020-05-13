import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./i18n";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback="loading...">
    <App />
  </Suspense>,
  rootElement
);
