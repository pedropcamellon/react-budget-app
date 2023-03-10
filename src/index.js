import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BudgetsProvider } from "./contexts/BudgetsContext";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </StrictMode>
);
