import React, { useContext, useState } from 'react'
import style from "./login.module.css"

import { AuthContext } from '../../context/AuthContext';
import { authenticationFunc } from '../../services/authController';
import InputTextField from '../../components/common/inputTextField/InputTextField';


const Login = () => {

  const { auth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const authenticationFuncHandler = (e) => {
    e.preventDefault();
    authenticationFunc(auth, email, password, register)
  };

  const toggleRegister = (e) => {
    e.preventDefault();  // Evita que el botón intente enviar el formulario
    setRegister(!register);
  };
  
  return (
    <div className={style.login_page}>
      {/*Area de formulario*/}
      <div className={style.form_container}>
        <form className={style.form} onSubmit={authenticationFuncHandler}>
          <InputTextField
            inputData={email}
            setInput={setEmail}
            typeInput="email"
            placeholderText='Ingrese su Email'
            />
          <InputTextField
            inputData={password}
            setInput={setPassword}
            typeInput="password"
            placeholderText='Ingrese su contrasena'
            />
          <input className={style.button_form}
            type="submit"
            value={register ? "Registrate" : "Iniciar sesion"} 
          />
        <div className={style.login_register}>
          <h4>{ register ? "Si ya tienes cuenta" : "¿No tienes cuenta?"}</h4>
          <button onClick={toggleRegister}>{register ? "Inicia sesion" : "Registrate"}</button>  
        </div>
        </form>
      </div> 

      <div className='main-image'>

      </div>
    </div>
  )
}

export default Login;