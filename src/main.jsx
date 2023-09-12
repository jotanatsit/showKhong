import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginForm from "./login";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/login",
      element: <LoginForm />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <ContextProvider>
         <RouterProvider router={router} />
      </ContextProvider>
   </React.StrictMode>
);
