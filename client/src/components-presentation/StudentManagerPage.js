import React, {Component} from 'react'
import AddStudentForm from './AddStudentForm'
import withStyles from '@material-ui/core/es/styles/withStyles'
import moment from 'moment'
import Button from '@material-ui/core/Button/Button'
import { PeanutIcon } from './PeanutIcon'

class StudentManagerPage extends Component {

  state = {
    editableStudent: null
  }

  fullName(student) {
    return `${student.lastName}, ${student.firstName}`
  }

  calculateGrade(student) {
    const today = moment()
    const cutoff = moment(new Date(today.year(), 6, 31))
    const updateAt = moment(student.updatedAt)
    const diffInMs = cutoff.diff(updateAt)
    const diffYears = moment.duration(diffInMs).years()

    return diffYears > 0 ? student.grade + diffYears : student.grade
  }

  editStudent = (student) => {
    return () => {
      this.setState({editableStudent: student})
    }
  }

  formatSex = student => student.boyOrGirl ? 'F' : 'M'

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
          <span className={classes.studentData}>{this.fullName(student)}</span>
          <span className={classes.studentData}>{this.formatSex(student)}</span>
          <span className={classes.studentData}>{student.lunchCode}</span>
          <span className={classes.studentData}>{this.calculateGrade(student)}</span>
          <PeanutIcon peanut={student.peanut}/>
          <Button variant="outlined" onClick={this.editStudent(student)}>Edit</Button>
        </div>
        ))}
      </div>
    </div>
  }
}

const styles = (theme) => {
  return {
    studentRow: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      borderBottom: '1px solid grey',
      borderColor: 'black'
    },
    studentData: {
      flex: '1 1 100px'
    }
  }
}

export default withStyles(styles)(StudentManagerPage)
