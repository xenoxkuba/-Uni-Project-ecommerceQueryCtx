import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AIPanel from "./AIPanel";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { CartProvider } from "./Store/CartProvider";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aipanel",
    element: (
      <CartProvider>
        <AIPanel />
      </CartProvider>
    ),
  },
  {
    path: "product/:productId",
    element: (
      <CartProvider>
        <ProductDetail  />
      </CartProvider>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
