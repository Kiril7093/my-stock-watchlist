import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';








export const useForm = (initialValues, onSubmitHandler) => {

    const {  authError, setAuthError } = useContext(AuthContext);

    
    const [values, setValues] = useState(initialValues);
    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const onSubmit = (e) => {

        e.preventDefault();
    

        onSubmitHandler(values);

        setValues(initialValues);



    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        
        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };
};