import React, {Component} from 'react';
import { LoremIpsum} from 'react-lorem-ipsum';
import '../App.css';
import  user from '../img/user.png';
import  home from '../img/home.jpg';
import  about from '../img/about.jpg';
import  login from '../img/login.jpg';
import  contact from '../img/contact.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { user } from '@fortawesome/free-solid-svg-icon/




class Intro extends Component {
  render(){
    return (
      <div>
        <section id = "home" style = {{ backgroundImage: `url(${home})` }}>
          <h1>Home</h1>
          <LoremIpsum p={1} /> 
        </section>

        <section id = "about" style = {{ backgroundImage: `url(${about})` }}>
          <h1>About</h1>
          <LoremIpsum p={2} />
        </section>

        <section id = "accounts/login"  style = {{ backgroundImage: `url(${login})` }}>
          <form action = "login" method = "POST"> 
            <div className = "loginBox">
              <img className = "profile-pic" src={user}/>
              <h3 style = {{color: 'black'}}>Sign in here</h3>
              
              <div className = "inputBox">
                <input type = "text" placeholder = "Enter username" required/>
              </div>
              <div className = "inputBox">
                <input type = "password" placeholder = "Enter password" required/> 
              </div>
              <div>
                <input type = "submit"/>
                <br></br>
                <a type = "submit">Create a new account</a>
              </div>
            </div>
          </form> 
          
        </section>

        <section id = "contact" style = {{ backgroundImage: `url(${contact})` }}>
          <h1>Contact</h1>
          <LoremIpsum p={1} /> 
        </section>

      </div>  
    );
  }
  
}

export default Intro;