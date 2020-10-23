import React from 'react';
import ReactDOM from 'react-dom';
import SignForm from './components/signForm'
const campos = [
    {
      id: "username",
      type: "text",
      name: "username",
      placeholder: "Username",
    },
    {
      id: "email",
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      id: "password",
      type: "password",
      name: "password",
      placeholder: "Password",
    },
    {
      id: "confirmPassword",
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm password",
    },
  ];
//tipo a (e.j name.length ===0)
//tipo b (e.j name === username)
//tipo c (e.j name === "abcd")
//tipo d (e.j name.length === username.length)
  const validaciones = [
    {
    tipo:"a",
      elemento1: "username",
      atributo1:"length",
      condicion: "===",
      elemento2: 0,
      atributo2:"",
      respuesta: "Length of username is too short",
    },
    {
        tipo:"a",
        elemento1: "email",
        atributo1:"length",
        condicion: "===",
        elemento2: 0,
        atributo2:"",
        respuesta: "Length of email is too short",
    },
    {
        tipo:"a",
        elemento1: "password",
        atributo1:"length",
        condicion: "<",
        elemento2: 5,
        atributo2:"",
        respuesta: "Length of password is too short",
    },
    {
        tipo:"b",
        elemento1: "password",
        atributo1:"",
        condicion: "!=",
        elemento2: "confirmPassword",
        atributo2:"",
        respuesta: "Password must match",
    },
  ];

ReactDOM.render(<SignForm campos={campos} validaciones={validaciones}/>,document.getElementById('root'))
