import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { authServiceFactory } from "../services/authService";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});

  const [authError, setAuthError] = useState(null);

  const navigate = useNavigate();

  const authService = authServiceFactory(auth.accessToken);




  
  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate("/dashboard");
    } catch (error) {
      setAuthError(error.message);
    }
  };





  const onRegisterSubmit = async (values) => {


    const { confirmPassword, ...registerData } = values;


    if (confirmPassword !== registerData.password) {
      setAuthError("Password don't match!");

    return;
    } else {
      try {
        const result = await authService.register(registerData);

        setAuth(result);

        navigate("/dashboard");
      } catch (error) {
        setAuthError(error.message);
      }
    }
  };






  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const contextValues = {
    authError,
    setAuthError,

    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
