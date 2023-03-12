const calculateInterest = (data) => {
    const startingAmount = parseFloat(data["starting-amount"]);
    const period = parseInt(data["period"]);
    const returnRate = parseFloat(data["return-rate"]) / 100;
    const compound = data["compound"];
  
    let result = startingAmount;
  
    let n;
    if (compound === "annually") {
      n = 1;
    } else if (compound === "monthly") {
      n = 12;
    } else if (compound === "weekly") {
      n = 52;
    } else if (compound === "daily") {
      n = 365;
    }
  
  result *= (1 + returnRate); 
  
  for (let i=2; i <= period * n; i++) {
  result *= (1 + returnRate); 
  }
  
  result=Math.round(result *100)/100;
  
  console.log(result);
  
  return result;
  };
  
  export default calculateInterest;