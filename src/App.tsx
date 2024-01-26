import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-tailwind/react";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import { Topbar } from "./components/Topbar";
import { Footer } from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "check",
          element: <Checkout />,
        },
        {
          path: "address",
          element: <Address />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/shipping-add",
      element: <Address />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
