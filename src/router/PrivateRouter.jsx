import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  const { login } = useSelector((store) => store.login);
  console.log(login);
  return true ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRouter;
