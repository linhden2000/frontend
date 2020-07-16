import React, {Component} from 'react';
import '../App.css';


class Navbar extends Component {
  render(){
    return (
        <div className="container">
          <nav className="navbar">
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li>
                      <a href="#login">Log in</a>
                  </li>
              </ul>   
          </nav>
        </div> 
    );
  }
  
}

export default Navbar;