import React, { Component } from 'react'
import LoginScreen from '../components-presentation/LoginScreen'
import {connect} from 'react-redux'
import { setTeacherLogin } from '../state/actions'

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
    })
  }

  render () {
    return <LoginScreen login={this.doLoginThing.bind(this)} />
  }
}

export default connect()(LoginContainer)