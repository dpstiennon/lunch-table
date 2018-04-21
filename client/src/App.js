import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Classroom from './components/Classroom'
import LayoutSelector from './components/LayoutSelector'

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
        <Route path="/teacher" exact render={() =>
          <LayoutSelector/>
        }/>
        <Route path="/teacher/students" exact render={() =>
          <Classroom />
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
