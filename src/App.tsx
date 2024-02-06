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
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { populateUser } from "./redux/userSlice";
import { populateCart } from "./redux/cart";
import Orders from "./pages/Orders";
import SpecificOrder from "./pages/SpecificOrder";

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
  const [login, setLogin] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const user: any = localStorage.getItem("user");
    if (user) {
      const userObj = JSON.parse(user);
      setLogin(true);
      dispatch(populateUser(userObj));
      //@ts-ignore
      dispatch(populateCart(userObj.user.cart));
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute isLoggedin={login}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Checkout />,
        },
        {
          path: "address",
          element: <Address />,
        },
        {
          path: "products",
          element: <ProductListing />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "orders/:id",
          element: <SpecificOrder />,
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
