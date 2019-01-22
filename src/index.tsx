import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./components/App";
import thunk from "redux-thunk";

// STYLES
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "./scss/main.scss";

// REDUX STORE
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
