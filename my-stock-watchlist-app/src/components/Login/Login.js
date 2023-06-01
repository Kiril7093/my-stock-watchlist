import styles from "./Login.module.css";

import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Modal } from "../Modal/Modal.js";

import { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";



const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = () => {
  const { onLoginSubmit,  authError, setAuthError  } = useAuthContext();

  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );




 
  const [showErrorMessage, setShowErrorMessage] = useState(false);



  useEffect(() => {
    if (authError) {
      setShowErrorMessage(true);
      const timeout = setTimeout(() => {
        setShowErrorMessage(false);
        setAuthError(null); // Moved outside the return statement
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [authError]);
  










  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-center items-center">
      <form
        className={`rounded-lg ${styles["form-container"]}`}
        id="login"
        method="POST"
        onSubmit={onSubmit}
      >
        <h3 className={`flex justify-center ${styles["form-title"]}`}>
         Login
        </h3>
        <div className="flex flex-col py-2">
          <label className="text-lg flex justify-center">Email</label>
          <input
            className={styles["form-input"]}
            type="email"
            id="email"
            placeholder="Sokka@gmail.com"
            name={LoginFormKeys.Email}
            value={values[LoginFormKeys.Email]}
            onChange={changeHandler}
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="text-lg flex justify-center">Password</label>
          <input
            className={styles["form-input"]}
            type="password"
            id="login-password"
            name={LoginFormKeys.Password}
            value={values[LoginFormKeys.Password]}
            onChange={changeHandler}
          />
        </div>

        <input className={styles["form-button"]}
        type="submit" value="Login" 
      />


      </form>

      {showErrorMessage && (

          <>
            <Modal authError={authError} />
        
          </>
        )}


    </div>
  );
};
