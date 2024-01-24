import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
