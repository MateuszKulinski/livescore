import React, { useState } from "react";
import './../assets/modal.scss';
import { validationRegister } from './../classes/tools';

function Register(props) {
  const [email, setEmail] = useState(props.email);
  const [userName, setUserName] = useState(props.userName);
  const [password, setPassword] = useState(props.password);


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

  const signUpClick = () => {
    const user = {
      email: email,
      password: password,
      userName: userName,
    }
    const errors = validationRegister(user);
    if (!errors.length) {
      props.signUpClick(user);
    } else {
      console.log(errors);
    }
  }
  return (
    <div className="register-container container">
      <label>Zarejestruj</label>
      <input type="text" name="email" placeholder="E-mail" onChange={changeEmailHandler}></input>
      <input type="text" name="userName" placeholder="Nazwa" onChange={changeUserNameHandler}></input>
      <input type="text" name="userPassword" placeholder="Hasło" onChange={changePasswordHandler}></input>
      <button
        onClick={signUpClick}
      >Zarejestruj</button>
    </div>
  )
}


export default Register;