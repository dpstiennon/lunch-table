import React, {Component} from 'react'
import AddStudentForm from './AddStudentForm'
import withStyles from '@material-ui/core/es/styles/withStyles'
import Button from '@material-ui/core/Button/Button'
import { PeanutIcon } from './PeanutIcon'
import { tableStyles } from '../jss/formStyles'

class StudentManagerPage extends Component {
  state = {
    editableStudent: null
  }

  editStudent = (student) => {
    return () => {
      this.setState({editableStudent: student})
    }
  }

  render() {
    const {students, addStudent, classes} = this.props
    return <div className="container">
      <h3>Add a new student</h3>
      <AddStudentForm createStudent={addStudent} student={this.state.editableStudent}/>

      <div>
        <div className={ classes.studentRow }>

        </div>
        {students.map(student => (
        <div key={student.id} className={classes.studentRow}>
          <span className={classes.studentData}>{student.fullName()}</span>
          <span className={classes.studentData}>{student.sex()}</span>
          <span className={classes.studentData}>{student.lunchCode}</span>
          <span className={classes.studentData}>{student.currentGrade()}</span>
          <PeanutIcon peanut={student.peanut}/>
          <Button variant="outlined" onClick={this.editStudent(student)}>Edit</Button>
        </div>
        ))}
      </div>
    </div>
  }
}

export default withStyles(tableStyles)(StudentManagerPage)
