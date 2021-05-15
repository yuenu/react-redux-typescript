import React from "react";
import ReactDOM from "react-dom";

import Home from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "state";
import thunk from "redux-thunk";


const store = createStore(reducer, {}, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
