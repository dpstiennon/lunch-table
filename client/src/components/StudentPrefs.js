import React, { Component } from 'react'
import StudentLogin from '../components-presentation/StudentLogin'
import StudentFriendsForm from '../components-presentation/StudentFriendsForm'

class StudentPrefs extends Component {

  state = {
    error: false,
    token: null,
    student: null
  }

  componentDidMount () {
    this.getStudent()
    const token = sessionStorage.getItem('token')
    if (token) {
      this.setState({ token: token })
    }
  }

  getStudent = async () => {
    const response = await fetch(`/api/student/${this.props.params.id}/name`)
    if (response.ok) {
      const student = await response.json()
      this.setState({student})
    }
  }

  getAllStudents = () => {
    return [
      'Bill',
      'Frank'
    ]
  }

  saveFriends = (friendsList) => {
    console.log(friendsList)
  }

  login = async (date) => {
    const response = await fetch(`/api/student/${this.props.params.id}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        id: this.props.params.id,
        birthDate: date
      })
    })
    if (response.ok) {
      const {token} = await response.json()
      sessionStorage.setItem('token', token)
      this.setState({token})

    } else {
      this.setState({error: true})
    }
  }

  render () {
    const {student, error, token} = this.state
    if (student && token) {
      return <StudentFriendsForm allStudents={this.getAllStudents()} saveFriends={this.saveFriends}/>
    } else if (student) {
      return <StudentLogin error={error} firstName={student.firstName} login={this.login}/>
    } else {
      return <div>loading</div>
    }
  }
}

export default StudentPrefs