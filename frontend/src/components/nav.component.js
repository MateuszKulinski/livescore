import React, { useState } from "react"

function Nav(props){ 
  return(
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <a href="/#" className="navbar-brand">Home</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a href="/#" className="nav-link">Zaloguj</a></li>
            <li className="nav-item"><a href="/#" className="nav-link">Zarejestruj</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Nav;