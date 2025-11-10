import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { isLogin, login, logout } = useContext(AuthContext);

  return (
    <nav>
      {isLogin ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
