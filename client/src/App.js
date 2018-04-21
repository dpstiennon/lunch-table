import React, { Component } from 'react';
import logo from './logo.svg';
import {Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Tablr</h1>
        </header>
        <Route path="/" exact render={() =>
          <div>
            <h1>Login</h1>
          </div>
        }/>
        <Route path="/teacher/students" exact render={() =>
          <div>
            <h1>This is a page to input your classroom</h1>
          </div>
        }/>
        <Route path="/teacher/tables" exact render={() =>
          <div>
            <h1>This page is where you can assign students to tables</h1>
          </div>
        }/>
        <Route path="/student" exact render={() =>
          <div>
            <h1>This is the page where students input their preferences</h1>
          </div>
        }/>
        <p className="App-intro">
          Created by David Stiennon
        </p>
      </div>
    );
  }
}

export default App;
