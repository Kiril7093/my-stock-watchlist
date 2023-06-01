// Modal.js
import React from "react";
import styles from "./Modal.module.css"; // Import the CSS module

export const Modal = ({ authError }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
   
        <p>{authError}</p>
      </div>
    </div>
  );
};


