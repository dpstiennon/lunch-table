import React, { Component } from 'react'
import LoginScreen from '../components-presentation/LoginScreen'
import {connect} from 'react-redux'
import { setTeacherLogin } from '../state/actions'
import { withRouter } from 'react-router-dom'

class LoginContainer extends Component {
  alertPassword(password){
    alert(password)
  }

  doLoginThing(username, password) {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'content-type': 'application/json'
      },
    }).then((result) => {
      return result.json()
    }).then((body) => {
      this.props.dispatch(setTeacherLogin(body))
      this.props.history.push('/teacher')
    })
  }

  render () {
    return <LoginScreen login={this.doLoginThing.bind(this)} />
  }
}

const connected = connect()(LoginContainer)
const routified = withRouter(connected)
export default routified