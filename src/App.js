import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HeaderPage from "./pages/HeaderPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart.jsx";
import ErrorPage from "./pages/Error.jsx";

import "./scss/app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderPage />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
