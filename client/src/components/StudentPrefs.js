import React, { Component } from 'react'
import StudentLogin from '../components-presentation/StudentLogin'
import StudentPrefsForm from '../components-presentation/StudentPrefsForm'

class StudentPrefs extends Component {

  state = {}

  componentDidMount () {
    this.getStudent()
  }

  getStudent = async () => {
    const response = await fetch(`/api/student/${this.props.params.id}/name`)
    if (response.ok) {
      const student = await response.json()
      this.setState({student})

    }
  }

  login = async (date) => {
    const response = await fetch('/api/student/login', {
      method: 'POST',
      contentType: 'application/json',
      body: {
        id: this.props.params.id,
        birthDate: date
      }
    })
    if (response.ok) {
      const {token} = await response.json()
      sessionStorage.setItem('token', token)

    }
  }

  render () {
    const {student} = this.state
    if (student && sessionStorage.getItem('student-token')) {
      return <StudentPrefsForm/>
    }
    else if (student) {
      return <StudentLogin firstName={student.firstName} login={this.login}/>
    }
    else {
      return <div>loading</div>
    }
  }
}

export default StudentPrefs