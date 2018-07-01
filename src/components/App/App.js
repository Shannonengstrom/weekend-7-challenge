import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';
import Page4 from '../Page4/Page4';
import Page5 from '../Page5/Page5';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router> 
          <div>
            <Route exact path="/" component={Page1}/>
            <Route exact path="/2" component={Page2}/>
            <Route exact path="/3" component={Page3}/>
            <Route exact path="/4" component={Page4}/>
            <Route exact path="/5" component={Page5}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
