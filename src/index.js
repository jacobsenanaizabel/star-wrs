import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Routes from "./services/Routes";

import * as serviceWorker from "./services/serviceWorker";

ReactDOM.render(<Routes />, document.getElementById("root"));
serviceWorker.register();
