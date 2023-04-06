import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const UserProtected = () => {
  const userData = localStorage.getItem("user");

  return userData ? <Outlet /> : <Navigate to="/login" />;
};

const NoUser = () => {
  const { userData } = useContext(AuthContext);
  return userData ? <Navigate to="/home" /> : <Outlet />;
};

const ProtectedRoutes = {
  UserProtected,
  NoUser,
};

export default ProtectedRoutes;
