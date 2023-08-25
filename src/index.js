import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import counterSoter from "./countStore";
import { CounterProvider } from "./context/counterContext";

const store = new counterSoter();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CounterProvider value={store}>
      <App />
    </CounterProvider>
  </React.StrictMode>
);

reportWebVitals();
