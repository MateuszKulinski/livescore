import React, { useState } from "react";
import './../assets/modal.scss';
import { Tools } from './../classes/tools';
import Errors from './errors.component';

function Register(props) {
  const [email, setEmail] = useState(props.email);
  const [userName, setUserName] = useState(props.userName);
  const [password, setPassword] = useState(props.password);
  const [rePassword, setRePassword] = useState(props.rePassword);
  const [errors, setErrors] = useState("");


  const changeEmailHandler = event => {
    const value = event.target.value;
    setEmail(value);
  }
  const changeUserNameHandler = event => {
    const value = event.target.value;
    setUserName(value);
  }
  const changePasswordHandler = event => {
    const value = event.target.value;
    setPassword(value);
  }
  const changeRePasswordHandler = event => {
    const value = event.target.value;
    setRePassword(value);
  }
  const changeErrorsHandler = errors => {
    const value = errors;
    console.log(errors);
    setErrors(value);
  }

  const signUpClick = async () => {
    const user = {
      email: email,
      password: password,
      rePassword: rePassword,
      userName: userName,
    }
    await Tools.validationRegister(user).then(function (result) {
      changeErrorsHandler(result);
    });

    if (errors.length === 0) {
      props.signUpClick(user);
    }
  }
  return (
    <div className="register-container container">
      <label>Zarejestruj</label>
      <input type="text" name="email" placeholder="E-mail" onChange={changeEmailHandler}></input>
      <input type="text" name="userName" placeholder="Nazwa" onChange={changeUserNameHandler}></input>
      <input type="text" name="userPassword" placeholder="Hasło" onChange={changePasswordHandler}></input>
      <input type="text" name="userRePassword" placeholder="Powtórz hasło" onChange={changeRePasswordHandler}></input>
      {errors.length ? <Errors
        errors={errors}
      /> : ""}
      <button
        onClick={signUpClick}
      >Zarejestruj</button>
    </div>
  )
}


export default Register;