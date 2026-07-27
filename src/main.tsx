// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LearningApp from "./app/learning/App.tsx";
import EcommerceApp from "./app/ecommerce/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import "./app/learning/javascript/polyfills/jsPolyfills.js";
import store from "./shared/stores/redux/store/store.ts";

const queryClient = new QueryClient();

const APP = import.meta.env.VITE_APP_MODE

const RootApp = APP === "ecommerce" ? EcommerceApp : LearningApp

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RootApp />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
  // </StrictMode>,
);
