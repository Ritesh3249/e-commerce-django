import { useNavigate } from "react-router-dom";
import { isAuth } from "../HelperFunctions/index";

export default function PRoute({ children }) {
  const auth = isAuth();
  const navigate = useNavigate();

  return auth ? children : navigate("/sign-in");
}
