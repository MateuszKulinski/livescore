import React from "react";
import './../assets/modal.scss';

function Register(props){ 
  const signUpClick = () =>{
    props.signUpClick();
  }
  return(
    <div className="register-container container">
      <label>Zarejestruj</label>
      <input type="text" name="email" placeholder="E-mail"></input>
      <input type="text" name="userName" placeholder="Nazwa"></input>
      <input type="text" name="userPassword" placeholder="Hasło"></input>
      <button
      onClick={signUpClick}
      >Zarejestruj</button>
    </div>
  )
}


export default Register;