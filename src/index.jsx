import "./index.less";
import React from "react";
import { render } from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "../src/store/reducers/index";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
