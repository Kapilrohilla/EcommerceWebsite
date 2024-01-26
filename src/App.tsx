import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import { ThemeProvider } from "@material-tailwind/react";
import Checkout from "./pages/Checkout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
