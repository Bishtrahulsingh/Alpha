import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import DataProvider from "./Context/DataContext";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <DataProvider>
      <App />
    </DataProvider>
  </Router>
);
