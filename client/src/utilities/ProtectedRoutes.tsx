import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const UserProtected = () => {
  const { userData } = useContext(AuthContext);
  console.log(userData);

  return userData ? <Outlet /> : <Navigate to="/login" />;
};

const NoUser = () => {
  const { userData } = useContext(AuthContext);
  console.log(userData);

  return userData ? <Navigate to="/" /> : <Outlet />;
};

const ProtectedRoutes = {
  UserProtected,
  NoUser,
};

export default ProtectedRoutes;
