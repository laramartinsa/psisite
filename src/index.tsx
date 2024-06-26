import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga4";

ReactGA.initialize('AW-16515472425');

const rootElement : HTMLElement | null = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement? rootElement : document.createElement("div"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
