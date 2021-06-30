import React, { useState, useEffect } from "react";
import authService from "./../services/auth.service";

function Nav(props) {
  const [userApp, setUserApp] = useState(false);
  useEffect(async () => {
    if (localStorage.getItem('token')) {
      console.log(props.userApp);
      setUserApp(JSON.parse(localStorage.getItem('user')));
    }
  }, [])

  const logout = () => {
    authService.logout();
    setUserApp(false);
  }
  const signInShowModal = () => {
    props.signInShowModal();
  }
  const signUpShowModal = () => {
    props.signUpShowModal();
  }
  return (

    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <a href="/#" className="navbar-brand">Home</a>
        <div className="collapse navbar-collapse">
          {userApp ?
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><button className="nav-link btn">Witaj {userApp.userName}</button></li>
              <li className="nav-item"><button onClick={logout} className="nav-link btn">Wyloguj</button></li>
            </ul>
            :

            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><button onClick={signInShowModal} className="nav-link btn">Zaloguj</button></li>
              <li className="nav-item"><button onClick={signUpShowModal} className="nav-link btn">Zarejestruj</button></li>
            </ul>
          }
        </div>
      </div>
    </nav >
  )
}


export default Nav;