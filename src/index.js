import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import App from "./components/app.mobx";
// import App from "./components/app.redux";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
