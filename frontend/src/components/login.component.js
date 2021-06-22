import React, { useState } from "react";
import './../assets/modal.scss';
import { validationRegister } from './../classes/tools';

function Login(props) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);

  const changeEmailHandler = event => {
    const value = event.target.value;
    setEmail(value);
  }
  const changePasswordHandler = event => {
    const value = event.target.value;
    setPassword(value);
  }

  const signInClick = () => {
    const user = {
      email: email,
      password: password,
    }
    const errors = validationRegister(user);
    if (!errors.length) {
      props.signInClick(user);
    } else {
      console.log(errors);
    }
  }
  return (
    <div className="login-container container">
      <label>Zaloguj</label>
      <input type="text" name="email" placeholder="E-mail" onChange={changeEmailHandler}></input>
      <input type="text" name="userPassword" placeholder="Hasło" onChange={changePasswordHandler}></input>
      <button
        onClick={signInClick}
      >Zaloguj</button>
    </div>
  )
}


export default Login;