import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./scss/main.scss";

ReactDOM.render(<App />, document.getElementById("root"));
