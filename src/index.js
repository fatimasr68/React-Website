import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback/ErrorFallback";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const root = createRoot(document.getElementById("root"));
// فعال‌سازی PWA
serviceWorkerRegistration.register();


root.render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // Reset the state of your app so the error doesn't happen again
    }}
  >
    <App />
  </ErrorBoundary>
);
