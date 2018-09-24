import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'

class StudentLogin extends Component {

  state = {
    birthDate: ''
  }

  login = (e) => {
    e.preventDefault()
    this.props.login(this.state.birthDate)
  }

  updateDate = (e) => {
    this.setState({birthDate: e.target.value})
  }

  render () {
    const {firstName, error}  = this.props
    return <div>
      <div>
        <p>
          Welcome, {firstName}!
        </p>
        <p>Enter your birthdate to log in!</p>
        {error &&
          <p>
            That doesn't look right!  Please try again
          </p>
        }
      </div>
      <form onSubmit={this.login}>
        <TextField
          onChange={this.updateDate}
          value={this.state.birthDate}
          type="date"
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