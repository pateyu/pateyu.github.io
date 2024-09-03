import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot is now the standard way to render in React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
