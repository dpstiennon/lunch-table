import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'

class StudentLogin extends Component {

  state = {
    birthDate: ''
  }

  login = () => {
    this.props.login(this.state.birthDate)
  }

  updateDate = (e) => {
    this.setState({birthDate: e.target.value})
  }

  render () {
    const {firstName}  = this.props
    return <div>
      <div>
        <p>
          Welcome, {firstName}!
        </p>
        <p>Enter your birthdate to log in!</p>
      </div>
      <form>
        <TextField
          onChange={this.updateDate}
          value={this.state.birthDate}
          type="date"
          label="Login with your birth date"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
      </form>
    </div>
  }
}

export default StudentLogin