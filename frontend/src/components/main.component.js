import React, { useState, useEffect  } from 'react';
import Nav from './nav.component'
import Home from './home.component';
import Login from './login.component';
import Register from './register.component';
import Modal from 'react-modal';
import Match from './match.component';
import axios from '../axios';
import 'react-notifications/lib/notifications.css'
import DatePicker from "react-datepicker";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pl from 'date-fns/locale/pl';
import { format } from "date-fns";
registerLocale('pl', pl)

function Main(props){
  const [matches, setMatches] = useState([]);  
  const [showSignInState, setShowSignInState] = useState(false);
  const [showSignUpState, setShowSignUpState] = useState(false);
  const [showMatches, setShowMatches] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(async() =>{
    loadTodayMatch(new Date());
  },[matches])

  const loadTodayMatch = async(date) =>{
    const formattedDate = format(date, 'yyyy-MM-dd');
    setDate(date);
    try{
      const res = await axios.get(`matches/today/${formattedDate}`);
      const matchesRes = res.data;
      if(matchesRes.count){
        setShowMatches(true);
        setMatches(matchesRes.matches);
      }
    }catch(err){
      console.log(err);
    }
  }

  const signInShowModal = () => {
    setShowSignUpState( false );
    setShowSignInState( !showSignInState )
  }
  const signUpShowModal = () => {
    setShowSignInState( false );
    setShowSignUpState( !showSignUpState );
  }
  const signInClick = async (user)=>{
    console.log("signInClick");
    console.log(user);
    try{

    }catch(err){
      NotificationManager.error(err.response.data.message);
    }
  }
  const signUpClick = async () => {
    console.log("signUpClick");
    
  }
    return(
      <div id="App">
        <NotificationContainer/>
      <div className="ModalContainer">      
      <Modal
        ariaHideApp={false}
        appElement={document.getElementById('ModalContainer')}
        className="custom-modal"
        isOpen={showSignInState}
        onRequestClose={() =>  setShowSignInState(false)} 
        contentLabel="Zaloguj">
        <Login
        signInClick={signInClick}/>
      </Modal>
      <Modal
        ariaHideApp={false}
        appElement={document.getElementById('ModalContainer')}
        className="custom-modal"
        isOpen={showSignUpState}
        onRequestClose={() =>  setShowSignUpState( false )} 
        contentLabel="Zarejestruj">
        <Register
        signUpClick={signUpClick}/>
      </Modal>
      </div>
      <Nav
          signInShowModal={user=>signInShowModal(user)}
          signUpShowModal={user=>signUpShowModal(user)}/>
        <div className="auth-wrapper">
          <div className="datapicker-container">
            <DatePicker
              selected={date}
              locale="pl"
              onChange={date => loadTodayMatch(date)}
            /> 
          </div>
          <div className="auth-inner">
            {showMatches ? (matches.map(match=>(
              <Match
                key={match.id}
                match={match}
                />
            ))) : (<Home/>)}
          </div>
        </div>
    </div>
    )
  }


export default Main;