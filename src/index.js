import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./store/store";
import "./utils/bootstrap-5.2.0-dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
