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

  async addStudent() {

  }

  componentDidMount() {
    this.getStudents()
  }

  render() {
    return <StudentManagerPage students={this.props.students}/>
  }
}

const mapStateToProps = (state) => ({
  students: state.students
})

export default connect(mapStateToProps)(StudentManager)