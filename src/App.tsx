import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";

import "./App.scss";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
// interface Props {
// children: JSX.Element;
// }

function Layout() {
  return (
    <>
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ShoppingCartProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </ShoppingCartProvider>
  );
};

export default App;
