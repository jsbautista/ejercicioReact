import React  from "react";
import UseForm from "../customHooks/useForm";
const signForm = (props) => {
 
  
  const { handleChange, handleSubmit,errors } = UseForm(props.campos,props.validaciones);
  const campos = props.campos;
  
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        {campos.map((item) => (
          <div key={item.id}>
            <label htmlFor={item.id}>{item.placeholder}:</label>
            <input
              id={item.id}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              onChange={handleChange}
            />
            {errors[item.name] && <p>Error</p>}
          </div>
        ))}

        <button>Enviar los datos</button>
      </form>
    </div>
  );
};
export default signForm;
