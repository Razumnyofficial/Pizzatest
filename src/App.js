import React from "react";
import { Route, Routes } from "react-router-dom";

import HeaderPage from "./pages/HeaderPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart.jsx";

import "./scss/app.scss";
import NotFoundBlock from "./components/NotFoundBlock/index.jsx";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="wrapper">
      <HeaderPage searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Routes>
      </div>
    </div>
  );
}

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <HeaderPage searchValue={searchValue} setSearchValue={setSearchValue} />
//       ),
//       // errorElement: <ErrorPage />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "/Cart", element: <Cart /> },
//         { path: "/*", element: <ErrorPage /> },
//       ],
//     },
//   ]);

//   return (
//     <>
//       <RouterProvider router={router} />;
//     </>
//   );
// }

export default App;
