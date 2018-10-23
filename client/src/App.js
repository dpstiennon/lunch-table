import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import TableLayout from './components/TableLayout'
import TeacherOverview from './components/TeacherOverview'
import 'bootstrap/dist/css/bootstrap.css';
import LoginContainer from './components/LoginContainer'
import StudentManagerLink from './components-presentation/StudentManagerLink'
import StudentManager from './components/StudentManager'
import StudentPrefs from './components/StudentPrefs'
// import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Tablr</h1>
        </header>
        <div id="modal-root"/>
        <Route path="/" exact render={() =>
          <LoginContainer/>
        }/>
        <Route path="/student/:id" render={(props) => <StudentPrefs {...props.match} />} />
        <Route path="/teacher" render={() => <StudentManagerLink /> } />
        <Route path="/teacher" exact render={() => <TeacherOverview/> }/>
        <Route path="/student-manager" exact render={() => <StudentManager/>} />
        <Route path="/teacher/layout/:id" exact render={(props) => <TableLayout {...props.match}/>} />
        <p className="App-intro">
          Created by David Stiennon
        </p>
      </div>
    );
  }
}

export default App;
