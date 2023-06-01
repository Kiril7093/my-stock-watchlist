import styles from "./Register.module.css";

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../context/AuthContext";

import { useState, useEffect } from "react";

import { Modal } from "../Modal/Modal.js";

export const Register = () => {

  const { onRegisterSubmit, authError, setAuthError } = useContext(AuthContext);


  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
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
        id="register"
        method="post"
        onSubmit={onSubmit}
        
        className={`rounded-lg ${styles["form-container"]}`}
      >
        <h3 className={`flex justify-center ${styles["form-title"]}`}>
          Register
        </h3>

        <div className="flex flex-col py-2">
          <label className="text-lg flex justify-center">Email</label>

          <input
            type="email"
            className={styles["form-input"]}
            id="email"
            name="email"
            placeholder="maria@email.com"
            value={values.email}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="text-lg flex justify-center">Password</label>
          <input
            type="password"
            className={styles["form-input"]}
            name="password"
            id="register-password"
            value={values.password}
            onChange={changeHandler}
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="text-lg flex justify-center">
            Confirm Password
          </label>
          <input
            type="password"
            className={styles["form-input"]}
            name="confirmPassword"
            id="confirm-password"
            value={values.confirmPassword}
            onChange={changeHandler}
          />
        </div>

        <input
          className={styles["form-button"]}
          type="submit"
          value="Register"
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
