import React, { Component } from 'react';
import '../assets/css/style.css';


import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/pages/header';
import Footer from './components/footer';
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Cosmos from './components/pages/cosmos'
import Arguments from './components/pages/arguments';
// import Moral from './components/pages/moral'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cosmos" component={Cosmos}/>
            <Route exact path="/arguments" component={Arguments}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Contact" component={Contact}/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
