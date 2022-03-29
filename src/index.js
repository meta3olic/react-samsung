import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import store from "./store";

import './styles/App.css';

const createStore = store();

ReactDOM.render(
  <Provider store={createStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
