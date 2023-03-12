const handleSubmit = (event) => {
    event.preventDefault(); 
  
    const formData = new FormData(event.target); 
    
    const data = Object.fromEntries(formData.entries());
  
    
    
    return data;

    
  };
  
  export default handleSubmit;