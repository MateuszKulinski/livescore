import React from 'react';
import Nav from './nav.component'
import Home from './home.component';
import Login from './login.component';
import Register from './register.component';
import Modal from 'react-modal';
import axios from '../axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css'


class Main extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      matches: [],
      showSignInState: false,
      showSignUpState: false,
      showMatches: false,
    };
  }
  componentDidMount(){
    this.loadTodayMatch();
  }
  async loadTodayMatch(){
    try{
      const res = await axios.get('matches/today');
      console.log(res);
      const matches = res.data;
      this.setState({ matches });
      if(matches.count){
        this.setState({ showMatches: true });
      }
    }catch(err){
      console.log(err);
    }
  }

  signInShowModal = () => {
    this.setState({signUpShowModal: false});
    this.setState({ showSignInState: !this.state.showSignInState})
  }
  signUpShowModal = () => {
    this.setState({showLogInModal: false});
    this.setState({ signUpShowModal: !this.state.signUpShowModal})
  }
  async signInClick(user){
    console.log(user);
    try{

    }catch(err){
      NotificationManager.error(err.response.data.message);
    }
  }
  async signUpClick(){
    
  }
  render(){
    return(
      <div id="App">
        <NotificationContainer/>
      <div className="ModalContainer">        
      <Modal
        appElement={document.getElementById('ModalContainer')}
        className="custom-modal"
        isOpen={this.state.showSignInState}
        onRequestClose={() =>  this.setState({showSignInState: false})} 
        contentLabel="Zaloguj">
        <Login
        signInClick={()=>this.signInClick()}/>
      </Modal>
      <Modal
        appElement={document.getElementById('ModalContainer')}
        className="custom-modal"
        isOpen={this.state.signUpShowModal}
        onRequestClose={() =>  this.setState({signUpShowModal: false})} 
        contentLabel="Zarejestruj">
        <Register
        signUpClick={()=>this.signUpClick()}/>
      </Modal>
      </div>
      <Nav
          signInShowModal={user=>this.signInShowModal(user)}
          signUpShowModal={user=>this.signUpShowModal(user)}/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            {this.state.showMatches ? (null) : (<Home/>)}
          </div>
        </div>
    </div>
    )
  }
}

export default Main;