import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-tailwind/react";
import Checkout from "./pages/Checkout";
import Address from "./pages/Address";
import { Topbar } from "./components/Topbar";
import { Footer } from "./components/Footer";
import ProductListing from "./pages/ProductListing";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";

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
  const [user, setUser] = useState<object | null>(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      console.log(user);
      setUser(JSON.parse(user));
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute isLoggedin={user}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: (
            // <ProtectedRoute isLoggedin={isLoggedIn}>
            <Home />
            // </ProtectedRoute>
          ),
        },
        {
          path: "check",
          element: (
            // <ProtectedRoute isLoggedin={isLoggedIn}>
            <Checkout />
            // </ProtectedRoute>
          ),
        },
        {
          path: "address",
          element: (
            // <ProtectedRoute isLoggedin={isLoggedIn}>
            <Address />
            // </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            // <ProtectedRoute isLoggedin={isLoggedIn}>
            <ProductListing />
            // </ProtectedRoute>
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
