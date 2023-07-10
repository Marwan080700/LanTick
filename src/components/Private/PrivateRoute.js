import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Context/UseContext";
import { useContext } from "react";

const PrivateRoute = () => {
  const [state] = useContext(UserContext);
  return state.isLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
