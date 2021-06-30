import React, { useState, useEffect } from 'react';
import Nav from './nav.component'
import Home from './home.component';
import Login from './login.component';
import Register from './register.component';
import Modal from 'react-modal';
import Match from './match.component';
import axios from '../axios';
import 'react-notifications/lib/notifications.css'
import DatePicker from "react-datepicker";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl';
import { format } from "date-fns";
import authService from "./../services/auth.service";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

registerLocale('pl', pl)

function Main(props) {
  const [matches, setMatches] = useState([]);
  const [showSignInState, setShowSignInState] = useState(false);
  const [showSignUpState, setShowSignUpState] = useState(false);
  const [showMatches, setShowMatches] = useState(false);
  const [date, setDate] = useState(new Date());
  const [userApp, setUserApp] = useState(false);

  useEffect(async () => {
    setUserApp(JSON.parse(localStorage.getItem('user')));
    loadTodayMatch(new Date());
  }, [])

  const loadTodayMatch = async (date) => {
    console.log("A");
    const formattedDate = format(date, 'yyyy-MM-dd');
    setDate(date);
    try {
      const res = await axios.get(`matches/today/${formattedDate}`);
      const matchesRes = res.data;
      if (matchesRes.count) {
        setShowMatches(true);
        setMatches(matchesRes.matches);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const signInShowModal = () => {
    setShowSignUpState(false);
    setShowSignInState(!showSignInState)
  }
  const signUpShowModal = () => {
    setShowSignInState(false);
    setShowSignUpState(!showSignUpState);
  }
  const signInClick = async (user) => {
    try {
      await authService.login(user)
        .then((value) => {
          if (localStorage.getItem('user') != false) {
            setUserApp(localStorage.getItem('user'));
            setShowSignInState(false);
            window.location.reload();
          } else {
            return false;
          }
        });

    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  }
  const signUpClick = async (user) => {
    try {
      const registerData = authService.register(user);
      if (registerData.status === 200) {
        setShowSignUpState(false);
      }
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }

  }
  const addDate = days => {
    let dateNew = new Date(date);
    dateNew.setDate(date.getDate() + days);
    loadTodayMatch(dateNew);
    setDate(dateNew);
  }
  return (
    <div id="App">
      <NotificationContainer />
      <div className="ModalContainer">
        <Modal
          ariaHideApp={false}
          appElement={document.getElementById('ModalContainer')}
          className="custom-modal"
          isOpen={showSignInState}
          onRequestClose={() => setShowSignInState(false)}
          contentLabel="Zaloguj">
          <Login
            signInClick={signInClick} />
        </Modal>
        <Modal
          ariaHideApp={false}
          appElement={document.getElementById('ModalContainer')}
          className="custom-modal"
          isOpen={showSignUpState}
          onRequestClose={() => setShowSignUpState(false)}
          contentLabel="Zarejestruj">
          <Register
            signUpClick={signUpClick} />
        </Modal>
      </div>
      <Nav
        userApp={userApp}
        signInShowModal={user => signInShowModal(user)}
        signUpShowModal={user => signUpShowModal(user)} />
      <div className="auth-wrapper">
        <div className="datapicker-container">

        </div>
        <div className="auth-inner">
          <div className="datapicker-container">
            <div className="svg-container —align-right">
              <div className="__svg-btn __fill-white"
                onClick={() => addDate(-1)}>
                <FaArrowLeft>
                </FaArrowLeft>
              </div>
            </div>
            <DatePicker
              selected={date}
              locale="pl"
              onChange={date => loadTodayMatch(date)}
            />
            <div className="svg-container">
              <div className="__svg-btn __fill-white"
                onClick={() => addDate(1)}>
                <FaArrowRight>
                </FaArrowRight>
              </div>
            </div>
          </div>
          {showMatches ? (matches.map(match => (
            <Match
              key={match.id}
              match={match}
            />
          ))) : (<Home />)}
        </div>
      </div>
    </div >
  )
}


export default Main;