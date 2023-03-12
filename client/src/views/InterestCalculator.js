import Form from "../components/Form.js";
import styles from "./InterestCalculator.module.css";
import ResultBlock from "../components/ResultBlock";

import { useState } from "react";





const InterestCalculator = ({result}) => {





  return (
      <div className={styles.container} > 

      
        <div className={styles.flexContainer}>



        <div className={styles.formContainer}>
        <Form />
        </div>
         
         <div className={styles.resultContainer}>
          <ResultBlock result={result}/>
       
        </div>


        </div>
        </div>
        
  );


};

export default InterestCalculator;
