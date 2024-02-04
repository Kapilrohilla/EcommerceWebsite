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
  // const [user, setUser] = useState<object | null>(null);
  // const user = store.getState().user;
  const [login, setLogin] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const user: any = localStorage.getItem("user");
    if (user) {
      const userObj = JSON.parse(user);
      setLogin(true);
      dispatch(populateUser(userObj));
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
