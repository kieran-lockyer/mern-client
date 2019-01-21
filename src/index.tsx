import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./components/App";

// STYLES
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./scss/main.scss";

// REDUX STORE
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
