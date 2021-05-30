import React from "react"

function Nav(props){ 
  const signInShowModal = () => {
    props.signInShowModal();
  }
  const signUpShowModal = () => {    
    props.signUpShowModal();
  }
  return(
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <a href="/#" className="navbar-brand">Home</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><button onClick={signInShowModal} className="nav-link btn">Zaloguj</button></li>
            <li className="nav-item"><button onClick={signUpShowModal} className="nav-link btn">Zarejestruj</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Nav;