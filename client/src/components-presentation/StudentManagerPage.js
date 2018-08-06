import React, {Component} from 'react'

class StudentManagerPage extends Component {

  fullName(student) {
    return `${student.lastName}, ${student.firstName}`
  }

  render() {
    const {students} = this.props
    return <div>
      <h3>Add a new student</h3>
      {/*<AddStudentForm/>*/}
      {students.map(student => <div>
        <span>{this.fullName(student)}</span>
        <span>
          <input type="radio"/>
          <input type="radio"/>
          <input type="radio"/>
        </span>
      </div>)}
    </div>

  }

}

export default StudentManagerPage