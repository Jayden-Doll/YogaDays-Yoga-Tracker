import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { LocalStorageProvider } from "./contexts/local-storage.context";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LocalStorageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocalStorageProvider>
  </React.StrictMode>
);
