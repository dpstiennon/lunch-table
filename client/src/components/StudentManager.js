import React, {Component} from 'react'
import {connect} from 'react-redux'
import { setStudents } from '../state/actions'
import StudentManagerPage from '../components-presentation/StudentManagerPage'

class StudentManager extends Component {

  async getStudents() {
    const resp = await fetch('/api/students')
    if (resp.ok){
      const data = await resp.json()
      this.props.dispatch(setStudents(data))
    }
  }

  addStudent = async (newStudent) => {
    const resp = await fetch('/api/students', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newStudent)
    })
    if(resp.ok) {
      const data = await resp.json()
      this.props.dispatch(setStudents(data))
    }
  }

  componentDidMount() {
    this.getStudents()
  }

  render() {
    return <StudentManagerPage students={this.props.students} addStudent={this.addStudent}/>
  }
}

const mapStateToProps = (state) => ({
  students: state.students
})

export default connect(mapStateToProps)(StudentManager)