import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-tailwind/react";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import { Topbar } from "./components/Topbar";
import { Footer } from "./components/Footer";
import ProductListing from "./pages/ProductListing";
import ProtectedRoute from "./components/ProtectedRoute";

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
  const isLoggedIn = false;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute isLoggedin={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "check",
          element: (
            <ProtectedRoute isLoggedin={isLoggedIn}>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "address",
          element: (
            <ProtectedRoute isLoggedin={isLoggedIn}>
              <Address />
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute isLoggedin={isLoggedIn}>
              <ProductListing />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
