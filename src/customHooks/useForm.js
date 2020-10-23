import {useState} from "react";
import validateForm from "../utils/validateForm";


const useForm = (campos,validaciones) => {
    
    const valores = "{"+
        campos.map((campo)=>(
           '"' + campo.name + '":""'
        ))+ "}";
    const [values, setValues]=useState(JSON.parse(valores));
const [errors,setErrors]=useState({});
  const handleChange = (evt) => {
    setValues({
        ...values,
        [evt.target.name]: evt.target.value
        
    
     } )
  };
const handleSubmit=(evt)=>
{
    evt.preventDefault();
    setErrors(validateForm(values,validaciones))
}
  return { handleChange,handleSubmit,errors };
};


export default useForm;
