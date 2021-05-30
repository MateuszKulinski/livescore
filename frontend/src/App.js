import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/nav.component';
import Home from './components/home.component';

function App() {
  return (
    <div className="App">
      <Nav/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Home/>
          </div>
        </div>
    </div>
  );
}

export default App;
