import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./Navbar.tsx";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="parent">
      <Navbar />
      <App />
    </div>
  </StrictMode>,
);
