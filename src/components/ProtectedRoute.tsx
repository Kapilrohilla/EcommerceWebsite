import Auth from "../pages/Auth";

const ProtectedRoute = ({ isLoggedin, children }: ProtectedRouteProps) => {
  // const navigaiton = useNavigate();
  if (isLoggedin) {
    return children;
  } else {
    // navigaiton("/auth");
    return <Auth />;
  }
};

export default ProtectedRoute;
type ProtectedRouteProps = {
  isLoggedin: boolean | unknown;
  children: React.JSX.Element;
};
