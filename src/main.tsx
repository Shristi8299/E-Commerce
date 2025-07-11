import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
