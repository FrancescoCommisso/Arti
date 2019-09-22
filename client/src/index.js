import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./fonts/aAutoSignature.otf";
import "./fonts/aAutoSignature.ttf";
import "./fonts/typewcond_bold.otf";
import "./fonts/typewcond_demi.otf";
import "./fonts/typewcond_regular.otf";
import "semantic-ui-less/semantic.less";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
