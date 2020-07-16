import React, {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import Intro from './component/Intro.js'
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <body>
        <div>
          <Navbar/>
          <Intro/>
        </div>

      </body>
      
    );
  }
  
}

export default App;
