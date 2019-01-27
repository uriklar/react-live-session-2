import React from "react";
import ReactDOM from "react-dom";
//import { Provider } from "react-redux";
import { Provider } from "mobx-react";
//import store from "./redux/store";
import TodoStore from "./mobx/todo-store";

import "./styles.css";

import App from "./app";

{
  /*<Provider store={store}>*/
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={TodoStore}>
    <App />
  </Provider>,
  rootElement
);
