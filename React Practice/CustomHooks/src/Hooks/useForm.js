import { useState } from "react";


export default function useForm(initailValue = {} , callback) {
    const [values, setValues] = useState(initailValue)

    const handleChange = (e) => {
        const {name , value} = e.target;
        setValues(prev => ({
            ...prev , 
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(callback) callback(values);
    }


    const restForm = () => setValues(initailValue)

  return {
    values,
    handleChange,
    handleSubmit,
    restForm
  }
}
