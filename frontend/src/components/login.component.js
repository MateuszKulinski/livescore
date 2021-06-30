import React, { useState } from "react";
import './../assets/modal.scss';
import { Tools } from './../classes/tools';
import Errors from './errors.component';

function Login(props) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);
  const [errors, setErrors] = useState("");

  const changeEmailHandler = event => {
    const value = event.target.value;
    setEmail(value);
  }
  const changePasswordHandler = event => {
    const value = event.target.value;
    setPassword(value);
  }
  const changeErrorsHandler = errors => {
    const value = errors;
    setErrors(value);
  }

  const signInClick = async () => {
    const user = {
      email: email,
      password: password,
    }
    await Tools.validationLogin(user).then(function (result) {
      changeErrorsHandler(result);
    });

    if (errors.length === 0) {
      props.signInClick(user).then((value) => {
        console.log(value);
        setErrors(['Błędny login lub hasło']);
      });
    }
  }
  return (
    <div className="login-container container">
      <label>Zaloguj</label>
      <input type="text" name="email" placeholder="E-mail" onChange={changeEmailHandler}></input>
      <input type="text" name="userPassword" placeholder="Hasło" onChange={changePasswordHandler}></input>
      {errors.length ? <Errors
        errors={errors}
      /> : ""}
      <button
        onClick={signInClick}
      >Zaloguj</button>
    </div>
  )
}


export default Login;