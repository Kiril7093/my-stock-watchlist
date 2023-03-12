import React from "react";
import { useState } from "react";
import styles from "./Form.module.css";
import handleSubmit from "../utils/handleSubmit";



const Form = () => {
//   const [result, setResult] = useState(null);

//   const onSubmit = (event) => {
//     event.preventDefault(); // prevent form from refreshing the page
//     const data = handleSubmit(event);
//     const result = calculateInterest(data);
//     setResult(result);
//   };

  return (

    <>
    <form className={styles.formBody} onSubmit={handleSubmit}>
      <h1>Interest Calculator</h1>
      <div>
        <label htmlFor="starting-amount">Initial investment (USD):</label>
        <input type="number" id="starting-amount" name="starting-amount" required />
      </div>
      <div>
        <label htmlFor="period">Period (years):</label>
        <input type="number" id="period" name="period" required />
      </div>
      <div>
        <label htmlFor="return-rate">Return rate (%):</label>
        <input type="number" id="return-rate" name="return-rate" required />
      </div>
      <div>
        <label htmlFor="compound">Compound:</label>
        <select id="compound" name="compound" required>
          <option value="">Select an option</option>
          <option value="annually">Annually</option>
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
        </select>
      </div>

      <button type="submit">Calculate</button>

    </form>

  
    </>
  );
};

export default Form;
