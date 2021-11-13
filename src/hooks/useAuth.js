import { useContext } from "react";
import { AuthContext } from "../Context/AuthProdiver/AuthProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
