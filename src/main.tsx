import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CalculatorProvider } from "./context/CalculatorProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <CalculatorProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CalculatorProvider>
);
