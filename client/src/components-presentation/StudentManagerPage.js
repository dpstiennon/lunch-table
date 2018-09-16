import React, {Component} from 'react'
import AddStudentForm from './AddStudentForm'
import withStyles from '@material-ui/core/es/styles/withStyles'

class StudentManagerPage extends Component {

  fullName(student) {
    return `${student.lastName}, ${student.firstName}`
  }

  render() {
    const {students, addStudent, classes} = this.props
    return <div className="container">
      <h3>Add a new student</h3>
      <AddStudentForm createStudent={addStudent}/>
      <div>
        {students.map(student => (
        <div className={classes.studentRow}>
          <span>{this.fullName(student)}</span>
          <span>
            <input type="radio"/>
            <input type="radio"/>
            <input type="radio"/>
          </span>
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
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    },
  }
}

export default withStyles(styles)(StudentManagerPage)