import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'

class StudentLogin extends Component {

  state = {
    lunchCode: ''
  }

  login = (e) => {
    e.preventDefault()
    this.props.login(this.state.lunchCode)
  }

  updateDate = (e) => {
    this.setState({lunchCode: e.target.value})
  }

  render () {
    const {firstName, error}  = this.props
    return <div>
      <div>
        <p>
          Welcome, {firstName}!
        </p>
        <p>Enter your Lunch Code to log in!</p>
        {error &&
          <p>
            {error}
          </p>
        }
      </div>
      <form onSubmit={this.login}>
        <TextField
          onChange={this.updateDate}
          value={this.state.lunchCode}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  }
}

export default StudentLogin
