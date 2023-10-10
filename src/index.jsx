import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AIPanel from "./AIPanel";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aipanel",
    element: <AIPanel />,
  },
  {
    path: "product/:productId",
    element: <ProductDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
