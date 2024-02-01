import Auth from "../pages/Auth";

const ProtectedRoute = ({ isLoggedin, children }: ProtectedRouteProps) => {
  if (isLoggedin) {
    return children;
  } else {
    return <Auth />;
  }
};

export default ProtectedRoute;
type ProtectedRouteProps = {
  isLoggedin: boolean;
  children: React.JSX.Element;
};
