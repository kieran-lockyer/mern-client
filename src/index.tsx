import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import AppRouter from "./routes/AppRouter";
import thunk from "redux-thunk";

// Styles
import "@blueprintjs/core/lib/css/blueprint.css";
import "./styles/CustomStyles.scss";

// Redux Config
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
