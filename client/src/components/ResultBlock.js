import React from 'react';
import styles from './ResultBlock.module.css';
import handleSubmit from '../utils/handleSubmit';


const ResultBlock = ({ result }) => {

  
  return (
    <div className={styles.resultBlock}>
      <h1>Results</h1>
      <p>Your total interest is: {result}</p>
    </div>
  );
};


export default ResultBlock;
