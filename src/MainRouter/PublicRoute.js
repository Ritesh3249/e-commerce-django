import { Navigate } from "react-router-dom";
import { isAuth } from "../HelperFunctions/index";

export default function PublicRoute({ children }) {
  const auth = isAuth();
  return !auth ? children : <Navigate to='/' />;
}
